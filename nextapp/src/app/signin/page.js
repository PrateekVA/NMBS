"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useNotification } from "@/context/NotificationContext";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();
  const { addNotification } = useNotification();

  const handleSignIn = () => {
    if (!mobile.trim()) {
      addNotification("Enter Mobile Number", "error");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      addNotification("Mobile number should be exactly 10 digits", "error");
      return;
    }

    if (!password.trim()) {
      addNotification("Enter Password", "error");
      return;
    }

    const usersData = JSON.parse(localStorage.getItem("usersdata")) || [];
    const user = usersData.find(u => u.mobile === mobile);

    if (!user) {
      addNotification("User is not registered, please sign up to continue.", "warning");
      router.push("/signup");
      return;
    }

    if (user.password !== password) {
      addNotification("Invalid Password", "error");
      return;
    }

    addNotification("Sign in Successful", "success");
    login(user);
    router.push("/");
  };

  return (
    <div className={styles.signinContainer}>
      <div className={styles.signinBox}>
        <div className={styles.signinLeft}>
          <p className={styles.signinTitle}>Login</p>
          <p className={styles.signinSubtitle}>
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <div className={styles.signinImage}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Login"
            />
          </div>
        </div>
        <div className={styles.signinRight}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.terms}>
            <p>
              By continuing, you agree to Flipkart's
              <span> Terms of Use</span> and <span>Privacy Policy.</span>
            </p>
          </div>
          <button className={styles.loginBtn} onClick={handleSignIn}>
            LOGIN
          </button>
          <Link href="/signup" className={styles.signupBtn}>
            Not Existing User? Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
