import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies list:</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/cars">Cars</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
