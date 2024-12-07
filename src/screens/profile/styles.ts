import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    userInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: s(10),
    },
    imageContainer: {
      backgroundColor: colors.LIGHT[20],
      width: s(72),
      height: s(72),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
    usernameContainer: {
      gap: s(10),
    },
    username: {
      color: colors.LIGHT[20],
    },
    name: {
      color: colors.DARK[75],
      lineHeight: ms(25),
    },
    actions: {
      marginTop: vs(30),
    },
  });
