import Layout from "../components/Layout";
import "../assets/styles/sass/styles.scss";

export default function Home() {
  return (
    <Layout>
      <div className="example">this is a test of content</div>
      <style jsx>{`
        .example {
          margin-right: 380px;
          width: calc(100% - 380px);
          background-color: gray;
          height: 100vh;
        }
      `}</style>
    </Layout>
  );
}
