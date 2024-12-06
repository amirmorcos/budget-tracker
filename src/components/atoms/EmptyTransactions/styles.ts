import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      gap: s(2),
      alignItems: "center",
    },
    text: {
      color: colors.DARK[100],
    },
  });
