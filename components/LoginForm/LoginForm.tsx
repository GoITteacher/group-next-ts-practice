"use client";
import { login } from "@/services/auth";
import css from "./LoginForm.module.css";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const res = await login(body);
    setUser(res.user);
    router.push("/");
  };

  return (
    <div className={css["loginForm"]}>
      <form action={handleSubmit}>
        <input type="email" name="email" defaultValue="user@example.com" />
        <input type="password" name="password" defaultValue="string" />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default LoginForm;
