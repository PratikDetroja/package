import Head from "next/head";
import Link from "next/link";
const Home = () => (
  <div className="splashscreen">
    <div className="logo">
      <Link href="/login">
        <a>
          <img src="/logo.png" alt="logo" />
        </a>
      </Link>
    </div>
  </div>
);

export default Home;
