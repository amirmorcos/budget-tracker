import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters/extend";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colors.LIGHT[40],
      borderRadius: 16,
      paddingVertical: vs(14),
      paddingHorizontal: s(16),
    },
    infoContainer: {
      flexDirection: "row",
      gap: s(10),
    },
    description: {
      color: colors.LIGHT[20],
    },
    amount: {
      textAlign: "right",
      color: colors.RED[100],
    },
    time: {
      color: colors.LIGHT[20],
    },
    iconContainer: {
      backgroundColor: colors.YELLOW[20],
      height: s(48),
      width: s(48),
      borderRadius: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    gap: {
      gap: s(6),
    },
  });
