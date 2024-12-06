import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TextInput, View } from "react-native";

const AmountInput = () => {
  const { currentTheme } = useThemeContext();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        gap: 2,
      }}
    >
      <AppText
        text="$"
        overrideTextStyle={{
          fontSize: 64,
          lineHeight: 64,
          color: currentTheme.LIGHT[100],
        }}
      />
      <TextInput
        style={{
          fontSize: 64,
          lineHeight: 70,
          color: currentTheme.LIGHT[100],
        }}
        maxLength={4}
        keyboardType="decimal-pad"
        placeholder="0"
        placeholderTextColor={currentTheme.LIGHT[100]}
      />
    </View>
  );
};

export default AmountInput;
