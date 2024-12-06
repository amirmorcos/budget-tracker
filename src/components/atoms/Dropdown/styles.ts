import { StyleSheet } from "react-native";
import { Colors } from "theme/types";

export default (colors: Colors) =>
  StyleSheet.create({
    container: {
      borderColor: colors.LIGHT[40],
      borderWidth: 1,
      borderRadius: 16,
      backgroundColor: colors.LIGHT[100],
    },
    dropdownContainer: {
      borderRadius: 16,
      borderColor: colors.LIGHT[40],
    },
    placeholder: {
      color: colors.LIGHT[20],
    },
  });
