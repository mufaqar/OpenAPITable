import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Box className="footer__wrapper">
        <Image
          src="/images/tmf-logo.svg"
          alt="tmforum logo"
          width={150}
          height={36}
        />
        <Box className="footer">
          <Box>
            <Typography className="widget-title">Explore TMForum</Typography>
            <ul className="footer__list">
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/"
                  target="_blank"
                >
                  <Typography>About the Forum</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/careers-with-tm-forum/"
                  target="_blank"
                >
                  <Typography>Careers with TM Forum</Typography>
                </Link>
              </li>
              <li>
                <Link href="https://inform.tmforum.org/" target="_blank">
                  <Typography>News &amp; Insights</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-privacy-policy/"
                  target="_blank"
                >
                  <Typography>Privacy &amp; Policy</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/legal-branding/website-terms-and-conditions/"
                  target="_blank"
                >
                  <Typography> Website T&amp;Cs and Cookies</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/about-tm-forum/contact-us/frequently-asked-questions/"
                  target="_blank"
                >
                  <Typography>Help &amp; FAQ</Typography>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tmforum.org/contact-us/"
                  target="_blank"
                >
                  <Typography>Contact</Typography>
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography className="widget-title">Contact us</Typography>
            <ul className="footer__list__contact">
              <li>
                <Typography>General Inquiries:</Typography>
                <Link href="mailto:info@tmforum.org">
                  <Typography>info@tmforum.org</Typography>
                </Link>
              </li>
              <li>
                <Typography>Member Services:</Typography>
                <Link href="mailto:memberservices@tmforum.org">
                  <Typography>memberservices@tmforum.org</Typography>
                </Link>
              </li>
              <li>
                <Typography>Interested in Joining?</Typography>
                <Link href="mailto:newmembers@tmforum.org">
                  <Typography>newmembers@tmforum.org</Typography>
                </Link>
              </li>
              <li>
                <Typography> Press Inquiries:</Typography>
                <Link href="mailto:tmforum@championcomms.com">
                  <Typography>tmforum@championcomms.com</Typography>
                </Link>
              </li>
            </ul>
          </Box>
          <Box>
            <Typography className="widget-title">Stay Connected</Typography>
            <Box className="footer__links">
              <Link href="https://www.facebook.com/tmforum" target="_blank">
                <Box>
                  <Image
                    className="footer__links__icon"
                    src="/images/social/facebook.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                </Box>
              </Link>
              <Link href="https://twitter.com/tmforumorg" target="_blank">
                <Box>
                  <Image
                    className="footer__links__icon"
                    src="/images/social/twitter.svg"
                    alt="twitter"
                    width={24}
                    height={24}
                  />
                </Box>
              </Link>
              <Link
                href="https://www.linkedin.com/company/tm-forum"
                target="_blank"
              >
                <Box>
                  <Image
                    className="footer__links__icon"
                    src="/images/social/linkedin.svg"
                    alt="linkedin"
                    width={24}
                    height={24}
                  />
                </Box>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCLKFQ99UR0KRtF3BTQzurOw"
                target="_blank"
              >
                <Box>
                  <Image
                    className="footer__links__icon"
                    src="/images/social/youtube.svg"
                    alt="youtube"
                    width={24}
                    height={24}
                  />
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
