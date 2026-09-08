"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useAuthStore } from "@/stores/auth";
import { logout } from "@/services/auth";

const Header = () => {
  const isAuth = useAuthStore((s) => s.isAuth);
  const clearUser = useAuthStore((s) => s.clearUser);

  const handleLogoutClick = () => {
    clearUser();
    logout();
  };

  return (
    <div className={css["header"]}>
      <Link href="/">Main Page</Link>

      {!isAuth && <Link href="/login">Login</Link>}

      {isAuth && <button onClick={handleLogoutClick}>Logout</button>}
    </div>
  );
};

export default Header;
