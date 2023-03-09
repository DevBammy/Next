import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.home}>
          <h1>Welcome</h1>
          <h2>Welcome</h2>
          <h3>Welcome</h3>
          <h4>Welcome</h4>
          <p>
            Here you will find the complete list of everyone in this
            orgarnization...
          </p>
          <Link href="/staff" className="btn">
            See list
          </Link>
          <label htmlFor="name">Your Name</label>
          <input type="text" />
        </div>
      </section>
    </>
  );
}
