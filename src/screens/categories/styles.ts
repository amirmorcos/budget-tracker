import { StyleSheet } from "react-native";
import { vs } from "react-native-size-matters/extend";

export default StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: vs(20),
  },
});
