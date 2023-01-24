import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';
import SubNavigation from './Navigation/SubNavigation';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <SubNavigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
