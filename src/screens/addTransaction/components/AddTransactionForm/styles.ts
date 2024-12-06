import { StyleSheet } from "react-native";
import { vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    card: {
      marginTop: vs(20),
    },
  });
