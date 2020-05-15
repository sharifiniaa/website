import Layout from "../components/Layout";
import "../assets/styles/sass/styles.scss";
import Home from "../containers/HomePage/Home";
import LastBlog from "../containers/HomePage/LastBlog";

export default function index() {
  return (
    <Layout>
      <Home />
      <LastBlog />
    </Layout>
  );
}
