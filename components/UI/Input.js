import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <input {...props} />
    </>
  );
};
export default Input;
