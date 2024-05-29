import { StyleSheet, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";
import BikesScreen from "./screens/BikesScreen";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    // ToDo
    // <View style={styles.container}>
    //   {(isLogin && <BikesScreen />) || <LoginScreen loginHandler={loginHandler} />}
    // </View>

    <View style={styles.container}>
      <BikesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
