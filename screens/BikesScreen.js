import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination } from "@mui/material";
import Button from "../components/UI/Button";

import BikeItem from "../components/Bike/BikeItem";
import TotalCount from "../components/Bike/TotalCount";
import styles from "./BikesScreen.module.css";
import Logo from "../components/UI/Logo";
import Input from "../components/UI/Input";
import EmptyBikesList from "../components/Bike/EmptyBikesList";

const BikesScreen = () => {
  const [bikesItems, setBikesItems] = useState([]);
  const [index, setIndex] = useState([]);
  const [totalCount, setTotalCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchDataCount();
  }, [query, index]);

  const fetchDataCount = async () => {
    axios({
      method: "get",
      url: `https://bikeindex.org:443/api/v3/search/count?location=Munich&query=${query}&distance=10&stolenness=stolen`,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setTotalCount(response.data.stolen);
      })
      .then(() => {
        fetchData();
      });
  };

  const fetchData = async () => {
    axios({
      method: "get",
      url: `https://bikeindex.org:443/api/v3/search?page=${index}&query=${query}&per_page=10&location=Munich&distance=10&stolenness=stolen`,
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    })
      .then(function (response) {
        setBikesItems(response.data.bikes);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.toJSON());
        alert("Ops something went wrong!");
      });
  };

  const setPageNumber = (event, page) => {
    setIndex(page);
  };

  const searchQueryHander = (event) => {
    setSearchInput(event.target.value);
  };

  const submitSearchHandler = (event) => {
    setLoading(true);
    setQuery(searchInput);
  };

  return (
    (!loading && (
      <>
        <Logo width="64" height="64" />
        <p>SEARCH FOR NEARBY STOLEN BIKES</p>
        <div className={styles["search-container"]}>
          <Input
            type="text"
            placeholder="Search"
            onChange={searchQueryHander}
          />
          <Button type="button" onClick={submitSearchHandler} value="Search" />
        </div>
        <TotalCount total={totalCount} />

        {bikesItems.length != 0 ? (
          <>
            <ul className={styles["bike-items"]}>
              {bikesItems.map((item) => (
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
            <Pagination count={totalCount / 10} onChange={setPageNumber} />
          </>
        ) : (
          <EmptyBikesList />
        )}
      </>
    )) || <Logo />
  );
};
export default BikesScreen;
