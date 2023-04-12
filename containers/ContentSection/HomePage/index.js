import Home from './introduce/index';
import LastBlog from './LastBlog/index';
import AboutMe from './About/index';
import Resume from './Resume/index';
import TechStack from './TechStack/index';
import Contact from './Contact/index';

function HomePage() {
  return (
    <>
      <Home />
      <LastBlog />
      <AboutMe />
      <Resume />
      <TechStack />
      <Contact />
    </>
  );
}

export default HomePage;
