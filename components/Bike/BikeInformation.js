import Text from "../UI/Text";
import styles from "./BikeInformation.module.css";
export default BikeInformation = ({
  title,
  stolenDate,
  description,
  stolenLocation,
}) => {
  let formattedDate = "";
  if (stolenDate) {
    let date = new Date(stolenDate);
    formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <div className={styles["bike-information"]}>
      <h5>
        <Text label="Title" title={title} />
      </h5>
      <Text label="dateStolen" title={formattedDate} />
      <Text label="description" title={description} />
      <Text label="locationStolen" title={stolenLocation} />
    </div>
  );
};
