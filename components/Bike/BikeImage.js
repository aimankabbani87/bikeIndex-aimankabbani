import styles from "./BikeImage.module.css";
export default BikeImage = ({ img, width, height,url }) => {
  return (
    <a className={styles["bike-item-info"]} href={url} target="_blank">
      <div className={styles["image-container"]}>
        <img
          src={img != null ? img : "./noimages.png"}
          width={width}
          height={height}
        />
      </div>
    </a>
  );
};
