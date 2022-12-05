import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
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
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
}
