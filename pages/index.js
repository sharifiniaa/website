import Layout from "../components/Layout";
import "../assets/styles/sass/styles.scss";
import Home from "../containers/HomePage/Home";
import LastBlog from "../containers/HomePage/LastBlog";
import AboutMe from "../containers/HomePage/About";
import Resume from "../containers/HomePage/Resume/";
import TechStack from "../containers/HomePage/TechStack";
import Contact from '../containers/HomePage/Contact';


export default function index() {
  return (
    <Layout>
      <Home />
      <LastBlog />
      <AboutMe />
      <Resume />
      <TechStack />
      <Contact/>
    </Layout>
  );
}
