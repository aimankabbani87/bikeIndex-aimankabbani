import styles from "./BikeItem.module.css";

const BikeItem = (props) => {
  let formattedDate = "";
  if (props.date_stolen) {
    let date = new Date(props.dateStolen);
    formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <li className={styles["bike-item"]} key={props.id}>
      <a className={styles["bike-item-info"]} href={props.url} target="_blank">
        <div className={styles["image-container"]}>
          <img
            src={
              props.largeImg != null
                ? props.largeImg
                : "./noimages.png"
            }
            width={160}
            height={160}
          />
        </div>
      </a>
      <div className={styles["bike-information"]}>
        <h5>Title: {props.title}</h5>
        <p>dateStolen:{formattedDate}</p>
        <p>description:{props.description}</p>
        {/* <p>{props.date_reported}</p> */}
        <p>locationStolen:{props.stolenLocation}</p>
      </div>
    </li>
  );
};

export default BikeItem;
