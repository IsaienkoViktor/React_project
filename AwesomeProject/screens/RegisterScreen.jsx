import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Image />
      <TextInput style={styles.textInput} placeholder="login" />
      <TextInput style={styles.textInput} placeholder="login" />
      <TextInput style={styles.textInput} placeholder="login" />
      <Button />
      <Text />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    width: 375,
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  textInput: {
    flexShrink: 1,
    height: 50,
    width: 343,
    alignItems: "flex-start",
    rowGap: 0,
  },
});
