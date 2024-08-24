import Carousel from "./carousel";
import ForgotPassword from "./forgot-password";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.carouselContent, className].join(" ")}>
      <Carousel
        carouselPosition="unset"
        carouselTop="unset"
        carouselLeft="unset"
        image5="/image-5@2x.png"
        image4="/image-4@2x.png"
        carouselFlex="1"
        carouselMinWidth="302px"
        groupDivWidth="unset"
        groupDivAlignSelf="stretch"
        groupDivHeight="100%"
        frameDivFlexDirection="row"
        frameDivAlignSelf="stretch"
        frameDivWidth="unset"
        frameDivFlex="1"
        elevateYourMessagingWidth="unset"
        elevateYourMessagingDisplay="unset"
        elevateYourMessagingMargin="0"
        elevateYourMessagingAlignSelf="stretch"
        elevateYourMessagingFontWeight="700"
        selamatDatangDiWidth="unset"
        selamatDatangDiDisplay="unset"
        selamatDatangDiAlignSelf="stretch"
      />
      <div className={styles.login}>
        <ForgotPassword
          forgotPasswordPosition="unset"
          forgotPasswordTop="unset"
          forgotPasswordLeft="unset"
          showFrameDiv={false}
          showButton={false}
          googleIconxCzngx="/googleicon2048x2048czn3g8x8-1@2x.png"
          forgotPasswordWidth="unset"
          forgotPasswordAlignSelf="stretch"
          frameDivMargin="0"
          frameDivFlex="1"
          welcomeBackMargin="0"
          welcomeBackFontWeight="700"
          frameDivAlignSelf="stretch"
          buttonWidth="unset"
          buttonHeight="unset"
          buttonAlignSelf="stretch"
          usernameEmailWidth="101px"
          usernameEmailBorder="none"
          usernameEmailOutline="none"
          usernameEmailBackgroundColor="transparent"
          usernameEmailHeight="15px"
          usernameEmailDisplay="inline-block"
          usernameEmailPadding="0"
          buttonWidth1="unset"
          buttonHeight1="unset"
          buttonAlignSelf1="stretch"
          passwordBorder="none"
          passwordOutline="none"
          passwordBackgroundColor="transparent"
          passwordHeight="15px"
          passwordPadding="0"
          lupaPasswordDisplay="inline-block"
          lupaPasswordMinWidth="112px"
          frameDivBorder="none"
          frameDivPadding="0"
          frameDivBackgroundColor="transparent"
          frameDivAlignSelf1="stretch"
          buttonWidth2="unset"
          buttonHeight2="unset"
          buttonPadding="15.5px 20px"
          buttonAlignSelf2="stretch"
          signInTextDecoration="none"
          signInDisplay="inline-block"
          signInMinWidth="47px"
          frameDivWidth="unset"
          frameDivAlignSelf2="stretch"
          buttonWidth3="unset"
          buttonAlignSelf3="stretch"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
