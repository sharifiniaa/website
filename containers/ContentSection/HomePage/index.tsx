import Introduce from './introduce';
import LastBlog from './LastBlog';
import AboutMe from './About';
import Resume from './Resume';
import TechStack from './TechStack';
import Contact from './Contact';

function HomePage() {
  return (
    <>
      <Introduce />
      <LastBlog />
      <AboutMe />
      <Resume />
      <TechStack />
      <Contact />
    </>
  );
}

export default HomePage;
