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
            <Link href="/forms/form-data">Form 1</Link>
          </li>
          <li>
            <Link href="/forms/controlled-form">Form 2</Link>
          </li>
          <li>
            <Link href="/forms/formik">Form 3</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
