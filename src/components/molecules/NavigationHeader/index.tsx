import { useNavigation } from "@react-navigation/native";
import { BackArrowIcon } from "assets/images/svg";
import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { NavigationHeaderProps } from "./types";
import { hasNotch } from "react-native-device-info";
import { vs } from "react-native-size-matters/extend";

const NavigationHeader = ({ title, color }: NavigationHeaderProps) => {
  const navigation = useNavigation();
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  const top = hasNotch() ? 0 : vs(20);
  return (
    <View style={{ marginTop: top }}>
      <View style={themedStyles.container}>
        <View style={themedStyles.icon}>
          <BackArrowIcon
            fill={color ?? currentTheme.DARK[75]}
            onPress={navigation.goBack}
          />
        </View>
        <AppText
          overrideTextStyle={{ color: color ?? currentTheme.DARK[75] }}
          fontFamily="semiBold"
          fontSize="title3"
          text={title}
        />
      </View>
      <View style={themedStyles.divider} />
    </View>
  );
};

export default NavigationHeader;
