import Introduce from './introduce';
// import LastBlog from './LastBlog';
import AboutMe from './About';
import Resume from './Resume';
import TechStack from './TechStack';
import Contact from './Contact';
import Head from "next/head";

function HomePage() {
  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
      <Introduce />
      {/*<LastBlog />*/}
      <AboutMe />
      <Resume />
      <TechStack />
      <Contact />
    </>
  );
}

export default HomePage;
