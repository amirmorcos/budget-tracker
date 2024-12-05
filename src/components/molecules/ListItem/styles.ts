import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (color: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: s(2),
    },
    right: {
      color: color.DARK[25],
    },
  });
