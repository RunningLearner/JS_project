import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostData } from "../lib/posts";
import homeStyles from "../styles/Home.module.css";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div>
      <Head>
        <title>RunningLearner</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[RunningLearner Introduction]</p>
        <p>(This is a web site)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.headingMd}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
};
