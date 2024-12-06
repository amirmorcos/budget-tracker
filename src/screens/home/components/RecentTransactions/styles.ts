import { StyleSheet } from "react-native";
import { vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: vs(20),
    },
    viewAll: {
      marginTop: vs(20),
    },
    item: {
      marginTop: vs(10),
    },
  });
