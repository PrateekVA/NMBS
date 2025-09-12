"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useNotification } from "@/context/NotificationContext";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { addNotification } = useNotification();

  const handleSignUp = () => {
    if (!mobile.trim()) {
      addNotification("Enter mobile number", "error");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      addNotification("Mobile number should have 10 digits", "error");
      return;
    }

    if (!username.trim()) {
      addNotification("Enter your name", "error");
      return;
    }

    if (!password.trim()) {
      addNotification("Enter password", "error");
      return;
    }

    const usersData = JSON.parse(localStorage.getItem("usersdata")) || [];

    const existingUser = usersData.find(user => user.mobile === mobile);
    if (existingUser) {
      addNotification("User with this mobile number already exists. Please sign in.", "warning");
      router.push("/signin");
      return;
    }

    const newUser = { username, mobile, password };
    localStorage.setItem("usersdata", JSON.stringify([...usersData, newUser]));

    addNotification("Signup Successful", "success");
    router.push("/signin");
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <div className={styles.signupLeft}>
          <p className={styles.signupTitle}>Looks like you're new here!</p>
          <p className={styles.signupSubtitle}>
            Sign up with your mobile number to get started
          </p>
          <div className={styles.signupImage}>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Signup"
            />
          </div>
        </div>
        <div className={styles.signupRight}>
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
              type="text"
              placeholder="Enter your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button className={styles.continueBtn} onClick={handleSignUp}>
            CONTINUE
          </button>
          <Link href="/signin" className={styles.existingUserBtn}>
            Existing User? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
