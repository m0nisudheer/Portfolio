import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/m0nisudheer" target="_blank">
        GitHub
      </Link>

      <Link href="https://www.instagram.com/sudheer._.chowdaryy" target="_blank">
        Instagram
      </Link>

      <Link href="https://www.linkedin.com/in/manisudheer" target="_blank">
        LinkedIn
      </Link>
    </div>
  );
}
