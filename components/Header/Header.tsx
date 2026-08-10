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
            <Link href="/songs">Songs</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/cars">Cars</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
