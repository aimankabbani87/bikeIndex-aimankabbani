import styles from "./Logo.module.css";

const Logo = ({ width, height }) => {
  return (
    <div className={styles.container}>
      <a href="https://bikeindex.org/" target="_blank">
        <img
          alt="Bike Index home"
          src="../../public/logo.png"
          width={width}
          height={height}
        />
      </a>
    </div>
  );
};
export default Logo;
