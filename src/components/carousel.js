import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./carousel.module.css";

const Carousel = ({
  className = "",
  carouselPosition,
  carouselTop,
  carouselLeft,
  image5,
  image4,
  carouselFlex,
  carouselMinWidth,
  groupDivWidth,
  groupDivAlignSelf,
  groupDivHeight,
  frameDivFlexDirection,
  frameDivAlignSelf,
  frameDivWidth,
  frameDivFlex,
  elevateYourMessagingWidth,
  elevateYourMessagingDisplay,
  elevateYourMessagingMargin,
  elevateYourMessagingAlignSelf,
  elevateYourMessagingFontWeight,
  selamatDatangDiWidth,
  selamatDatangDiDisplay,
  selamatDatangDiAlignSelf,
}) => {
  const carouselStyle = useMemo(() => {
    return {
      position: carouselPosition,
      top: carouselTop,
      left: carouselLeft,
      flex: carouselFlex,
      minWidth: carouselMinWidth,
    };
  }, [
    carouselPosition,
    carouselTop,
    carouselLeft,
    carouselFlex,
    carouselMinWidth,
  ]);

  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      alignSelf: groupDivAlignSelf,
    };
  }, [groupDivWidth, groupDivAlignSelf]);

  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const frameDiv4Style = useMemo(() => {
    return {
      flexDirection: frameDivFlexDirection,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivFlexDirection, frameDivAlignSelf]);

  const frameDiv5Style = useMemo(() => {
    return {
      width: frameDivWidth,
      flex: frameDivFlex,
    };
  }, [frameDivWidth, frameDivFlex]);

  const elevateYourMessagingStyle = useMemo(() => {
    return {
      width: elevateYourMessagingWidth,
      display: elevateYourMessagingDisplay,
      margin: elevateYourMessagingMargin,
      alignSelf: elevateYourMessagingAlignSelf,
      fontWeight: elevateYourMessagingFontWeight,
    };
  }, [
    elevateYourMessagingWidth,
    elevateYourMessagingDisplay,
    elevateYourMessagingMargin,
    elevateYourMessagingAlignSelf,
    elevateYourMessagingFontWeight,
  ]);

  const selamatDatangDiStyle = useMemo(() => {
    return {
      width: selamatDatangDiWidth,
      display: selamatDatangDiDisplay,
      alignSelf: selamatDatangDiAlignSelf,
    };
  }, [selamatDatangDiWidth, selamatDatangDiDisplay, selamatDatangDiAlignSelf]);

  return (
    <div
      className={[styles.property1frame5123, className].join(" ")}
      style={carouselStyle}
    >
      <div className={styles.property1frame5123Inner} style={groupDivStyle}>
        <div className={styles.image5Parent} style={groupDiv1Style}>
          <img className={styles.image5Icon} alt="" src={image5} />
          <img className={styles.image4Icon} alt="" src={image4} />
        </div>
      </div>
      <div className={styles.property1frame5123Child} style={frameDiv4Style}>
        <div
          className={styles.elevateYourMessagingEfficieParent}
          style={frameDiv5Style}
        >
          <b
            className={styles.elevateYourMessaging}
            style={elevateYourMessagingStyle}
          >
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </b>
          <div className={styles.selamatDatangDi} style={selamatDatangDiStyle}>
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </div>
        </div>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,
  image4: PropTypes.string,

  /** Style props */
  carouselPosition: PropTypes.any,
  carouselTop: PropTypes.any,
  carouselLeft: PropTypes.any,
  carouselFlex: PropTypes.any,
  carouselMinWidth: PropTypes.any,
  groupDivWidth: PropTypes.any,
  groupDivAlignSelf: PropTypes.any,
  groupDivHeight: PropTypes.any,
  frameDivFlexDirection: PropTypes.any,
  frameDivAlignSelf: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivFlex: PropTypes.any,
  elevateYourMessagingWidth: PropTypes.any,
  elevateYourMessagingDisplay: PropTypes.any,
  elevateYourMessagingMargin: PropTypes.any,
  elevateYourMessagingAlignSelf: PropTypes.any,
  elevateYourMessagingFontWeight: PropTypes.any,
  selamatDatangDiWidth: PropTypes.any,
  selamatDatangDiDisplay: PropTypes.any,
  selamatDatangDiAlignSelf: PropTypes.any,
};

export default Carousel;
