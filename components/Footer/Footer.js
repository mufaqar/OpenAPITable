import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <Image
          src="/images/logos/tmforum_logo.png"
          alt="tmforum logo"
          width={150}
          height={36}
        />
        <div className="footer">
          <div>
            <h3 className="widget-title">Explore TMForum</h3>
            <ul className="footer__list">
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/"
                  target="_blank"
                >
                  About the Forum
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/careers-with-tm-forum/"
                  target="_blank"
                >
                  Careers with TM Forum
                </Link>
              </li>
              <li>
                <Link href="https://inform.tmforum.org/" target="_blank">
                  News &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-privacy-policy/"
                  target="_blank"
                >
                  Privacy &amp; Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-terms-and-conditions/"
                  target="_blank"
                >
                  Website T&amp;Cs and Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/contact-us/frequently-asked-questions/"
                  target="_blank"
                >
                  Help &amp; FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/contact-us/"
                  target="_blank"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="widget-title">Contact us</h3>
            <ul className="footer__list__contact">
              <li>
                <strong>General Inquiries:</strong> <br />
                <Link href="mailto:info@tmforum.org">info@tmforum.org</Link>
              </li>
              <li>
                <strong>Member Services:</strong> <br />
                <Link href="mailto:memberservices@tmforum.org">
                  memberservices@tmforum.org
                </Link>
              </li>
              <li>
                <strong>Interested in Joining?</strong> <br />
                <Link href="mailto:newmembers@tmforum.org">
                  newmembers@tmforum.org
                </Link>
              </li>
              <li>
                <strong>Press Inquiries:</strong> <br />
                <Link href="mailto:tmforum@championcomms.com">
                  tmforum@championcomms.com
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="widget-title">Stay Connected</h3>
            <div className="footer__links">
              <Link href="https://www.facebook.com/tmforum" target="_blank">
                <div>
                  <Image
                    className="footer__links__icon"
                    src="/images/social/facebook.svg"
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
                    src="/images/social/twitter.svg"
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
                    src="/images/social/linkedin.svg"
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
                    src="/images/social/youtube.svg"
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
