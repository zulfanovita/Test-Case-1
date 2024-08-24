import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./logo.module.css";

const Logo = ({
  className = "",
  logoPosition,
  logoGap,
  logoTop,
  logoLeft,
  group,
  groupIconWidth = "100px", /* Default width */
  groupIconHeight = "100px", /* Default height */
  group1,
  groupIconWidth1 = "100px", /* Default width */
  groupIconHeight1 = "100px", /* Default height */
  logoWidth,
  groupIconPosition,
  groupIconFlex,
  groupIconDisplay,
  groupIconFlexDirection,
  groupIconPadding,
}) => {
  const logoStyle = useMemo(() => {
    return {
      position: logoPosition,
      gap: logoGap,
      top: logoTop,
      left: logoLeft,
      width: logoWidth,
    };
  }, [logoPosition, logoGap, logoTop, logoLeft, logoWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      width: groupIconWidth,
      height: groupIconHeight,
    };
  }, [groupIconWidth, groupIconHeight]);

  const groupIcon1Style = useMemo(() => {
    return {
      width: groupIconWidth1,
      height: groupIconHeight1,
      position: groupIconPosition,
      flex: groupIconFlex,
      display: groupIconDisplay,
      flexDirection: groupIconFlexDirection,
      padding: groupIconPadding,
    };
  }, [
    groupIconWidth1,
    groupIconHeight1,
    groupIconPosition,
    groupIconFlex,
    groupIconDisplay,
    groupIconFlexDirection,
    groupIconPadding,
  ]);

  return (
    <div
      className={[styles.typeprimaryLightPositionh, className].join(" ")}
      style={logoStyle}
    >
      <img
        className={styles.groupIcon}
        alt=""
        src={group}
        style={groupIconStyle}
      />
      <img
        className={styles.groupIcon1}
        alt=""
        src={group1}
        style={groupIcon1Style}
      />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  group: PropTypes.string,
  group1: PropTypes.string,

  /** Style props */
  logoPosition: PropTypes.any,
  logoGap: PropTypes.any,
  logoTop: PropTypes.any,
  logoLeft: PropTypes.any,
  groupIconWidth: PropTypes.string, /* Use string for CSS values */
  groupIconHeight: PropTypes.string, /* Use string for CSS values */
  groupIconWidth1: PropTypes.string, /* Use string for CSS values */
  groupIconHeight1: PropTypes.string, /* Use string for CSS values */
  logoWidth: PropTypes.any,
  groupIconPosition: PropTypes.any,
  groupIconFlex: PropTypes.any,
  groupIconDisplay: PropTypes.any,
  groupIconFlexDirection: PropTypes.any,
  groupIconPadding: PropTypes.any,
};

export default Logo;
