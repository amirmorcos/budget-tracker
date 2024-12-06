import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";
import { InputProps } from "./types";
import AppText from "atoms/AppText";

const Input = ({
  overrideContainerStyle,
  placeholderTextColor,
  errorMessage,
  ...props
}: InputProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <View>
      <View style={[themedStyles.container, overrideContainerStyle]}>
        <TextInput
          {...props}
          placeholderTextColor={placeholderTextColor ?? currentTheme.LIGHT[20]}
        />
      </View>
      {errorMessage && (
        <AppText
          text={errorMessage}
          fontSize="small"
          overrideTextStyle={{
            color: currentTheme.RED[100],
          }}
        />
      )}
    </View>
  );
};

export default Input;
