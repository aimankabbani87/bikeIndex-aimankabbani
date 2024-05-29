import styles from "./BikeItem.module.css";
import BikeInformation from "./BikeInformation";
import BikeImage from "./BikeImage";

const BikeItem = (props) => {
  return (
    <li className={styles["bike-item"]} key={props.id} id={props.id}>
      <div className={styles["bike-column-image"]}>
        <BikeImage
          className={styles["bike-image"]}
          img={props.largeImg}
          url={props.url}
          width="160"
          height="160"
        />
      </div>
      <div className={styles["bike-column-image"]}>
        <BikeInformation
          className={styles["bike-information"]}
          title={props.title}
          stolenDate={props.date_stolen}
          description={props.description}
          stolenLocation={props.stolenLocation}
        />
      </div>
    </li>
  );
};

export default BikeItem;
