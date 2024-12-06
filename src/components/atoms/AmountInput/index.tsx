import AppText from "atoms/AppText";
import Input from "atoms/Input";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import { ms } from "react-native-size-matters/extend";
import styles from "./styles";
import { AmountInputProps } from "./types";

const AmountInput = ({
  overrideContainerStyle,
  errorMessage,
  value,
  ...props
}: AmountInputProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <View>
      <View style={[themedStyles.container, overrideContainerStyle]}>
        <AppText text="$" overrideTextStyle={themedStyles.prefix} />
        <Input
          {...props}
          placeholderTextColor={currentTheme.LIGHT[100]}
          style={[themedStyles.input, { lineHeight: !value ? ms(70) : ms(72) }]}
          overrideContainerStyle={themedStyles.inputContainer}
          maxLength={4}
          keyboardType="decimal-pad"
          placeholder="0"
        />
      </View>
      {errorMessage && <AppText text={errorMessage} fontSize="small" />}
    </View>
  );
};

export default AmountInput;
