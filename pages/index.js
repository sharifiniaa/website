import Layout from "../components/Layout";
import "../assets/styles/sass/styles.scss";
import Home from "../containers/HomePage/Home";
import LastBlog from "../containers/HomePage/LastBlog";
import AboutMe from "../containers/HomePage/About";
import Resume from "../containers/Resume/";

export default function index() {
  return (
    <Layout>
      <Home />
      <LastBlog />
      <AboutMe />
      <Resume />
    </Layout>
  );
}
