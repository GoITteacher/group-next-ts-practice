"use client";
import { useAuthStore } from "@/stores/auth";
import css from "./ProfileInfo.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProfileInfo = () => {
  const router = useRouter();
  const isAuth = useAuthStore((s) => s.isAuth);

  // useEffect(() => {
  //   if (!isAuth) {
  //     router.push("/login");
  //   }
  // }, [isAuth]);

  return <div className={css["profileInfo"]}>ProfileInfo</div>;
};

export default ProfileInfo;
