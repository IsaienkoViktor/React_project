import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import icon from "../assets/images/icon.png";
import icon from "../assets/images/icon.png";

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.addphoto} source={icon}></Image>
      <Text style={styles.mainText}>Реєстрація</Text>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Логін" />
        <TextInput
          style={styles.textInput}
          placeholder="Адреса електронної пошти"
        />
        <TextInput style={styles.textInput} placeholder="Пароль" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 235,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  addphoto: { flexShrink: 0, height: 120, width: 132 },
  mainText: {
    flexShrink: 0,
    height: 35,
    textAlign: "center",
    color: "rgba(33, 33, 33, 1)",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
  },

  textInput: {
    flexShrink: 1,
    height: 50,
    width: 343,
    alignItems: "flex-start",
    rowGap: 0,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 4,
  },
  button: {
    width: 343,
    backgroundColor: "rgba(255, 108, 0, 1)",
    alignItems: "center",
    rowGap: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
  },
  buttonText: {
    flexShrink: 0,
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0,
  },
});
