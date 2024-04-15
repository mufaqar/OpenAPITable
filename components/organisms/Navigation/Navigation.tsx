"use client";
import { useAppSelector } from "@/redux/store/store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faChevronDown,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "react-oidc-context";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/features/userDataSlice";
import NavigationSearch from "./NavigationSearch";
import "./navigation.scss";
import "./navigationSearch.scss";
import "./subNavigation.scss";

interface INavigation {
  logoSrc: string;
  navigationLinks: {
    name: string;
    children: {
      name: string;
      children: {
        name: string;
        href: string;
      }[];
      href: string;
    }[];
    href: string;
  }[];
}

const Navigation = (props: INavigation) => {
  const { logoSrc, navigationLinks } = props;

  const [activeLink, setActiveLink] = useState("");
  const [activeChild, setActiveChild] = useState("");
  const [accountInfo, setAccountInfo] = useState(false);
  const [logoutDiv, setLogoutDiv] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userData = useAppSelector((state) => state.userData);

  const navbarRef = useRef<HTMLDivElement>(null);
  const auth = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  config.autoAddCss = false;

  const getRegisterLink = () => {
    const registerUrl = "https://myaccount.tmforum.org/register";
    const baseUrl = `https://${process.env.NEXT_PUBLIC_HOST_DOMAIN}`; // devbeta.ipsphere.net | tmforum.org
    const currentPage = localStorage.getItem("currentPage"); // '/' | '/pre-production' | '/historic'
    const encoded = encodeURIComponent(
      `${baseUrl}/oda/open-apis/table${currentPage}`,
    );
    const href = `${registerUrl}?spurl=${encoded}`;
    return href;
  };

  const handleNavClick = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link: string) => {
    if (activeLink === link) {
      setActiveLink("");
    } else {
      setActiveLink(link);
    }
  };

  const handleChildClick = (link: string, e: any) => {
    e.stopPropagation();
    if (activeChild === link) {
      setActiveChild("");
    } else {
      setActiveChild(link);
    }
  };

  const handleLogin = () => {
    void auth.signinRedirect();
  };

  const handleLogout = async () => {
    try {
      await auth.removeUser();
      localStorage.removeItem("tmfUser");
      router.push(`${process.env.NEXT_PUBLIC_AUTHORITY}/idp/saml2/slo`);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveLink("");
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbarRef]);

  useEffect(() => {
    const tmfUser = localStorage.getItem("tmfUser");

    if (tmfUser) {
      try {
        const parsedUser = JSON.parse(tmfUser);
        dispatch(setUserData(parsedUser.profile));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [dispatch]);

  return (
    <>
      <div className={cn("header-wrapper", "blue")}>
        <header>
          <Link href="https://www.tmforum.org/">
            <Image src={logoSrc} alt="logo" width={135.99} height={28.472} />
          </Link>
          <nav ref={navbarRef}>
            <ul
              className={`main-list ${
                isNavOpen ? "main-list__opend" : "main-list__closed"
              }`}
              style={auth.isAuthenticated ? { top: "86px" } : {}}
            >
              {navigationLinks.map((link) => (
                <div
                  key={link.name}
                  onClick={() => handleLinkClick(link.name)}
                  className={
                    activeLink === link.name && link?.children?.length > 0
                      ? "main-link__active"
                      : "main-link"
                  }
                >
                  <li className={`main-li`}>
                    <a href={`${link.href ? link.href : "#"}`}>{link.name}</a>
                    {link?.children?.length > 0 && (
                      <ul
                        className={
                          activeLink === link.name
                            ? "dropdown-list"
                            : "display-none"
                        }
                      >
                        {link?.children.map(({ name, children, href }) => (
                          <li
                            key={name}
                            className="dropdown-li"
                            onClick={(e) => handleChildClick(name, e)}
                          >
                            <a href={href} className={`dropdown-a`}>
                              {name}
                            </a>
                            {children?.length > 0 && (
                              <>
                                <ul
                                  className={`${
                                    activeChild === name
                                      ? "sub-menu"
                                      : "display-none"
                                  } ${!isNavOpen && "sub-menu"}`}
                                >
                                  {children?.map(({ name, href }) => (
                                    <li key={name} className="sub-menu-li">
                                      <a href={href} className={`sub-menu-a`}>
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
                  {link?.children?.length > 0 ? (
                    isNavOpen ? (
                      <FontAwesomeIcon
                        icon={faPlus}
                        size="xs"
                        style={{ scale: "1.2" }}
                        className="fa-plus"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                        className={
                          activeLink === link.name
                            ? "arrow-rotate-up"
                            : "arrow-rotate-down"
                        }
                      />
                    )
                  ) : null}
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
                src="/oda/open-apis/icons/tmf-search-icon.svg"
                alt="search icon"
                width={26}
                height={26}
                style={{ cursor: "pointer" }}
              />
            </div>
            {auth.isAuthenticated ? (
              <div
                className="account-authenticated-container"
                style={{ position: "relative" }}
              >
                <div
                  className="account-authenticated"
                  onClick={() => setLogoutDiv((prevState) => !prevState)}
                >
                  <div className="account-circle">
                    <p>
                      {userData && userData.given_name && userData.family_name
                        ? userData.given_name.charAt(0) +
                          userData.family_name.charAt(0)
                        : ""}
                    </p>
                  </div>
                  <span id="greetings-text">HI, {userData?.given_name}</span>
                </div>
                {logoutDiv && (
                  <div className="account">
                    <a href={process.env.NEXT_PUBLIC_ACCOUNT_LINK}>
                      <p>My account</p>
                    </a>
                    <p onClick={() => handleLogout()}>Log out</p>
                  </div>
                )}
              </div>
            ) : (
              <div
                className={isNavOpen ? "nav-icons__account" : "display-none-mq"}
                onClick={() => setAccountInfo((prevState) => !prevState)}
              >
                <Image
                  src="/oda/open-apis/icons/tmf-user-icon.svg"
                  alt="account icon"
                  width={26}
                  height={26}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
            {accountInfo && (
              <div className="account">
                <p onClick={() => handleLogin()}>Log in</p>
                <Link href={getRegisterLink()}>
                  <p>Register</p>
                </Link>
              </div>
            )}
            <div
              className={isNavOpen ? "menu-open" : "menu-hamburger"}
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
