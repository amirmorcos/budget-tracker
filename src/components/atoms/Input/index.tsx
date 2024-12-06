import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TextInput, View } from "react-native";

const Input = () => {
  const { currentTheme } = useThemeContext();
  return (
    <View
      style={{
        borderWidth: 1,
        paddingVertical: 14,
        borderRadius: 16,
        borderColor: currentTheme.LIGHT[40],
        marginVertical: 10,
        paddingHorizontal: 12,
        // b: currentTheme.LIGHT[100],
      }}
    >
      <TextInput
        maxLength={4}
        keyboardType="decimal-pad"
        placeholder="Description"
        placeholderTextColor={currentTheme.LIGHT[20]}
      />
    </View>
  );
};

export default Input;
