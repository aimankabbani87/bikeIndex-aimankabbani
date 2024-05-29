import Input from "../UI/Input";
import Button from "../UI/Button";

import styles from "./SearchBox.module.css";
export default SearchBox = ({ onSubmit, onSearch }) => {
  return (
    <div className={styles["search-container"]}>
      <p>SEARCH FOR NEARBY STOLEN BIKES</p>
      <Input type="text" placeholder="Search" onChange={onSearch} />
      <Button type="button" onClick={onSubmit} value="Search" />
    </div>
  );
};
