import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import bg from "./assets/images/bg.jpg";
import { RegisterScreen } from "./screens/RegisterScreen.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <RegisterScreen />
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  title: {},
  image: { flex: 1 },
});
