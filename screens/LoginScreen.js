import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Logo from "../components/UI/Logo";

const LoginScreen = ({ loginHandler }) => {
  return (
    <Card>
      <Logo width={64} height={64} />
      <Input
        label="Phone Number"
        placeholder="Phone Number"
        type="number"
        id="phonenumber"
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        id="password"
      />
      <Button type="button" id="login" value="Login" onClick={loginHandler} />
    </Card>
  );
};

export default LoginScreen;
