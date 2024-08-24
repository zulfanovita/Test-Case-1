import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./forgot-password.module.css";
import Link from '../app/(auth)/sign-up/page';

const ForgotPassword = ({
  className = "",
}) => {
  return (
    <div className={[styles.property1frame5123, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.welcomeBackParent}>
          <h5 className={styles.welcomeBack}>Welcome Back</h5>
          <div className={styles.wereSoExcited}>
            We’re so excited to see you again!
          </div>
        </div>
        <div className={styles.inputParent}>
          <input
            type="text"
            placeholder="Username / Email"
            className={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.inputField}
          />
          <a href="#"className={styles.lupaPassword}>Lupa Password?</a>
        </div>
        <button className={styles.signInButton}>Sign In</button>
        <div className={styles.butuhBuatAkunContainer}>
          <span>Butuh buat akun? </span>
          <a href="#" className={styles.daftarDiSini}>Daftar di sini</a>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  className: PropTypes.string,
};

export default ForgotPassword;
