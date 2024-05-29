import { useEffect, useState } from "react";
import axios from "axios";
import TotalCount from "../components/Bike/TotalCount";

import Logo from "../components/UI/Logo";
import EmptyBikesList from "../components/Bike/EmptyBikesList";
import BikeItemList from "../components/Bike/BikeItemList";
import SearchBox from "../components/Bike/SearchBox";

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
        <SearchBox
          onSearch={searchQueryHander}
          onSubmit={submitSearchHandler}
        />
        <TotalCount total={totalCount} />

        {bikesItems.length != 0 ? (
          <BikeItemList
            items={bikesItems}
            onPaginate={setPageNumber}
            totalCount={totalCount}
          />
        ) : (
          <EmptyBikesList />
        )}
      </>
    )) || <Logo />
  );
};
export default BikesScreen;
