import classes from "./Button.module.css";

const Button = (props) => {
  return <input className={classes.styled} {...props} />;
};

export default Button;
