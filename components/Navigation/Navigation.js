import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { gothamFont } from '../../helpers/gothamFont';
import Link from 'next/link';
import { useAuth } from 'react-oidc-context';
import { fetchUserInfo } from '../../services/userInfo/api';

const Navigation = (props) => {
  const { logoSrc, navigationLinks } = props;

  const [activeLink, setActiveLink] = useState('');
  const [activeChild, setActiveChild] = useState('');
  const [accountInfo, setAccountInfo] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const navbarRef = useRef(null);
  const auth = useAuth();
  console.log('nav auth', auth);

  const handleNavClick = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link) => {
    if (activeLink === link) {
      setActiveLink('');
    } else {
      setActiveLink(link);
    }
  };

  const handleChildClick = (link, e) => {
    e.stopPropagation();
    if (activeChild === link) {
      setActiveChild('');
    } else {
      setActiveChild(link);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveLink('');
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navbarRef]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchUserInfo(auth?.user?.access_token);
        setUserData(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [auth.user]);

  return (
    <div className="header-wrapper">
      <header>
        <Link href="https://www.tmforum.org/">
          <Image src={logoSrc} alt="logo" width={135.99} height={28.472} />
        </Link>
        <nav ref={navbarRef}>
          <ul
            className={`main-list ${
              isNavOpen ? 'main-list__opend' : 'main-list__closed'
            }`}
          >
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => handleLinkClick(link.name)}
                className={
                  activeLink === link.name ? 'main-link__active' : 'main-link'
                }
              >
                <li className={`${gothamFont.className} main-li`}>
                  <a href="#">{link.name}</a>
                  {link.children.length > 0 && (
                    <ul
                      className={
                        activeLink === link.name
                          ? 'dropdown-list'
                          : 'display-none'
                      }
                    >
                      {link.children.map(({ name, children, href }) => (
                        <li
                          key={name}
                          className="dropdown-li"
                          onClick={(e) => handleChildClick(name, e)}
                        >
                          <a
                            href={href}
                            className={`${gothamFont.className} dropdown-a`}
                          >
                            {name}
                          </a>
                          {children?.length > 0 && (
                            <>
                              <ul
                                className={`${
                                  activeChild === name
                                    ? 'sub-menu'
                                    : 'display-none'
                                } ${!isNavOpen && 'sub-menu'}`}
                              >
                                {children?.map(({ name, href }) => (
                                  <li key={name} className="sub-menu-li">
                                    <a
                                      href={href}
                                      className={`${gothamFont.className} sub-menu-a`}
                                    >
                                      {name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                size="xs"
                                className="dropdown-arrow"
                              />
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {isNavOpen ? (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="xs"
                    style={{ scale: '1.2' }}
                    className="fa-plus"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="xs"
                    className={
                      activeLink === link.name
                        ? 'arrow-rotate-up'
                        : 'arrow-rotate-down'
                    }
                  />
                )}
              </div>
            ))}
          </ul>
          {/* <ul
            className={`main-list ${
              isNavOpen ? 'main-list__opend' : 'main-list__closed'
            }`}
          >
            {navigationLinks.map((link) => (
              <li
                key={link.name}
                className={
                  activeLink === link.name ? 'main-link__active' : 'main-link'
                }
              >
                <div style={{ display: 'flex' }}>
                  <a href="#">{link.name}</a>
                  <p>x</p>
                </div>
                {link.children.length > 0 && (
                  <ul>
                    {link.children.map(({ name, children, href }) => (
                      <li key={name}>
                        <div>
                          <a href={href}>{name}</a>
                          <p>x</p>
                        </div>
                        {children?.length > 0 &&
                          children.map(({ name, href }) => (
                            <li key={name}>
                              <p>abc</p>
                            </li>
                          ))}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul> */}
        </nav>
        <div className="nav-icons">
          <div className="nav-icons__search">
            <Image
              src="/oda/open-apis/table/images/tmf-search-icon.svg"
              alt="search icon"
              width={26}
              height={26}
            />
          </div>
          <div
            className={isNavOpen ? 'nav-icons__account' : 'display-none-mq'}
            onClick={() => setAccountInfo((prevState) => !prevState)}
          >
            <Image
              src="/oda/open-apis/table/images/tmf-user-icon.svg"
              alt="account icon"
              width={26}
              height={26}
              style={{ cursor: 'pointer' }}
            />
          </div>
          {accountInfo && (
            <div className="account">
              <p
                className={gothamFont.className}
                onClick={() => void auth.signinRedirect()}
              >
                Log in
              </p>
              <p className={gothamFont.className}>Register</p>
            </div>
          )}
          <div
            className={isNavOpen ? 'menu-open' : 'menu-hamburger'}
            onClick={() => handleNavClick()}
          >
            <span className="menu-hamburger__line" />
            <span className="menu-hamburger__line" />
            <span className="menu-hamburger__line" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
