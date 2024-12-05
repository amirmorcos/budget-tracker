import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.VIOLET[20],
      borderRadius: 40,
      paddingHorizontal: s(14),
      paddingVertical: vs(10),
    },
    title: {
      color: colors.VIOLET[100],
    },
    borderedButton: {
      borderColor: colors.LIGHT[20],
      borderWidth: 1,
      backgroundColor: undefined,
    },
    borderedTitle: {
      color: colors.DARK[100],
    },
  });
