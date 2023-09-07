import Link from "next/link";
import styles from "../styles/NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Chat</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/post">Post</Link>
    </nav>
  );
};

export default NavigationBar;
