import {ReactNode} from 'react';
import ContentSection from '../containers/ContentSection';
import NavBar from '../containers/NavBar';

type Props = {
  children: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <>
      <NavBar />
      <ContentSection>{children}</ContentSection>
    </>
  );
};

export default Layout;
