import Layout from "../components/Layout";
import "../assets/styles/sass/styles.scss";
import Home from "../containers/HomePage/Home";

export default function index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
