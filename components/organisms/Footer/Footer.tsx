import Image from "next/image";
import Link from "next/link";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <Image
          src="/oda/open-apis/icons/tmf-logo.svg"
          alt="tmforum logo"
          width={150}
          height={36}
        />
        <div className="footer">
          <div>
            <p className="widget-title">Explore TMForum</p>
            <ul className="footer__list">
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/"
                  target="_blank"
                >
                  <p>About the Forum</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/careers-with-tm-forum/"
                  target="_blank"
                >
                  <p>Careers with TM Forum</p>
                </Link>
              </li>
              <li>
                <Link href="https://inform.tmforum.org/" target="_blank">
                  <p>News &amp; Insights</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-privacy-policy/"
                  target="_blank"
                >
                  <p>Privacy &amp; Policy</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-terms-and-conditions/"
                  target="_blank"
                >
                  <p> Website T&amp;Cs and Cookies</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/contact-us/frequently-asked-questions/"
                  target="_blank"
                >
                  <p>Help &amp; FAQ</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/contact-us/"
                  target="_blank"
                >
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="widget-title">Contact us</p>
            <ul className="footer__list__contact">
              <li>
                <p>General Inquiries:</p>
                <Link href="mailto:info@tmforum.org">
                  <p>info@tmforum.org</p>
                </Link>
              </li>
              <li>
                <p>Member Services:</p>
                <Link href="mailto:memberservices@tmforum.org">
                  <p>memberservices@tmforum.org</p>
                </Link>
              </li>
              <li>
                <p>Interested in Joining?</p>
                <Link href="mailto:newmembers@tmforum.org">
                  <p>newmembers@tmforum.org</p>
                </Link>
              </li>
              <li>
                <p> Press Inquiries:</p>
                <Link href="mailto:tmforum@championcomms.com">
                  <p>tmforum@championcomms.com</p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="widget-title">Stay Connected</p>
            <div className="footer__links">
              <Link href="https://www.facebook.com/tmforum" target="_blank">
                <div>
                  <Image
                    className="footer__links__icon"
                    src="/oda/open-apis/icons/facebook.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
              <Link href="https://twitter.com/tmforumorg" target="_blank">
                <div>
                  <Image
                    className="footer__links__icon"
                    src="/oda/open-apis/icons/twitter.svg"
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/tm-forum"
                target="_blank"
              >
                <div>
                  <Image
                    className="footer__links__icon"
                    src="/oda/open-apis/icons/linkedin.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCLKFQ99UR0KRtF3BTQzurOw"
                target="_blank"
              >
                <div>
                  <Image
                    className="footer__links__icon"
                    src="/oda/open-apis/icons/youtube.svg"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
