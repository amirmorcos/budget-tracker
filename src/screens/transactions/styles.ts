import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    filter: {
      alignSelf: "flex-end",
      borderColor: colors.LIGHT[20],
      padding: s(6),
      borderWidth: 1,
      borderRadius: 8,
    },
  });
