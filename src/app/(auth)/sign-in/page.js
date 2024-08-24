import Logo from "../../../components/logo";
import FrameComponent from "../../../components/frame-component";
import styles from "./index.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Logo
        logoPosition="unset"
        logoGap="15.9px"
        logoTop="unset"
        logoLeft="unset"
        group="/group.svg"
        groupIconWidth="23.5px"
        groupIconHeight="33.6px"
        group1="/group1.svg"
        groupIconWidth1="200.6px"
        groupIconHeight1="25.7px"
        logoWidth="177px"
        groupIconPosition="unset"
        groupIconFlex="1"
        groupIconDisplay="flex"
        groupIconFlexDirection="column"
        groupIconPadding="0px 0px 9.4px"
      />
      <section className={styles.carouselContentWrapper}>
        <FrameComponent />
      </section>
    </div>
  );
};

export default SignIn;
