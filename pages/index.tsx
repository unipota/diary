import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>diary</title>
      </Head>
      <Layout home>layout</Layout>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
export { getStaticProps };
