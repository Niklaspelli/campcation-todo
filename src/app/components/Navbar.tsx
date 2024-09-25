import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/todo">Todo</Link>
        </li>
      </ul>
    </nav>
  );
}
