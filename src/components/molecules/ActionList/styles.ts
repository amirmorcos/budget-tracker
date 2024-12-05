import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    listItemContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: s(10),
    },
    listItem: {
      backgroundColor: colors.VIOLET[20],
      borderRadius: 16,
      height: s(52),
      width: s(52),
      justifyContent: "center",
      alignItems: "center",
    },
  });
