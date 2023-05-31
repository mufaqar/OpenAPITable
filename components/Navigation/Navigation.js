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
import { fetchUserInfo2 } from '../../services/userInfo/api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/features/userDataSlice';
import { useRouter } from 'next/router';
import NavigationSearch from './NavigationSearch';

const Navigation = (props) => {
  const { logoSrc, navigationLinks } = props;

  const [activeLink, setActiveLink] = useState('');
  const [activeChild, setActiveChild] = useState('');
  const [accountInfo, setAccountInfo] = useState(false);
  const [logoutDiv, setLogoutDiv] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userData = useSelector((state) => state.userData);

  const navbarRef = useRef(null);
  const auth = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleLogout = async () => {
    try {
      await auth.removeUser();
      localStorage.removeItem('tmfUser');
      router.push(`${process.env.NEXT_PUBLIC_AUTHORITY}/idp/saml2/slo`);
    } catch (error) {
      console.error('Logout failed:', error);
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
    const tmfUser = localStorage.getItem('tmfUser');

    (async () => {
      try {
        const result = await fetchUserInfo2(tmfUser);
        dispatch(setUserData(result));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
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
          </nav>
          <div className="nav-icons">
            <div
              className="nav-icons__search"
              onClick={() => setIsSearchOpen((oldState) => !oldState)}
            >
              <Image
                src="/oda/open-apis/table/images/tmf-search-icon.svg"
                alt="search icon"
                width={26}
                height={26}
                style={{ cursor: 'pointer' }}
              />
            </div>
            {auth.isAuthenticated ? (
              <div style={{ position: 'relative' }}>
                <div
                  className="account-authenticated"
                  onClick={() => setLogoutDiv((prevState) => !prevState)}
                >
                  <div className="account-circle">
                    <p className={gothamFont.className}>
                      {userData && userData.given_name && userData.family_name
                        ? userData.given_name.charAt(0) +
                          userData.family_name.charAt(0)
                        : ''}
                    </p>
                  </div>
                  <span className={gothamFont.className}>
                    HI, {userData?.given_name}
                  </span>
                </div>
                {logoutDiv && (
                  <div className="account">
                    <a href={process.env.NEXT_PUBLIC_ACCOUNT_LINK}>
                      <p className={gothamFont.className}>My account</p>
                    </a>
                    <p
                      className={gothamFont.className}
                      onClick={() => handleLogout()}
                    >
                      Log out
                    </p>
                  </div>
                )}
              </div>
            ) : (
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
            )}
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
      {isSearchOpen && <NavigationSearch />}
    </>
  );
};
export default Navigation;
