import Content from '../containers/ContentSection';
import NavBar from '../containers/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Content children={children} />
    </>
  );
};

export default Layout;
