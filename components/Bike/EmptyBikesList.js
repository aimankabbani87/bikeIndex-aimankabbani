import styles from "./EmptyBikeList.module.css";

const EmptyBikesList = () => {
  return (
    <div className={styles["bike-info"]}>
      <p>No bikes found!</p>
    </div>
  );
};
export default EmptyBikesList;
