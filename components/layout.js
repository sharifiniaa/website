import ContentSection from '../containers/ContentSection';
import NavBar from '../containers/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentSection children={children} />
    </>
  );
};

export default Layout;
