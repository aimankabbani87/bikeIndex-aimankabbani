import BikeItem from "../Bike/BikeItem";
import { Pagination } from "@mui/material";
import { ScrollView } from "react-native";
import styles from "./BikeItemList.module.css";

export default BikeItemList = ({ items, onPaginate, totalCount }) => {
  return (
    <>
      <ScrollView>
        <ul className={styles["bike-items"]}>
          {items.map((item) => (
            <BikeItem
              url={item.url}
              id={item.id}
              title={item.title}
              description={item.description}
              dateStolen={item.date_stolen}
              stolenLocation={item.stolen_location}
              largeImg={item.large_img}
            />
          ))}
        </ul>
      </ScrollView>
      <Pagination count={totalCount / 10} onChange={onPaginate} />
    </>
  );
};
