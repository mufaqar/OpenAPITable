import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import SubNavigation from './Navigation/SubNavigation';
import RelatedLink from './RelatedLink/RelatedLink';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <SubNavigation />
      <main>{children}</main>
      <RelatedLink />
      <Footer />
    </>
  );
};

export default Layout;
