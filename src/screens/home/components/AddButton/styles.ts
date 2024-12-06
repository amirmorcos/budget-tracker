import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    button: {
      height: s(56),
      width: s(56),
      borderRadius: 50,
      backgroundColor: colors.VIOLET[100],
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: s(10),
      bottom: vs(10),
    },
    income: {
      marginTop: vs(10),
    },
    divider: {
      width: "100%",
      height: 0.5,
      marginVertical: vs(10),
      backgroundColor: colors.DARK[100],
    },
  });
