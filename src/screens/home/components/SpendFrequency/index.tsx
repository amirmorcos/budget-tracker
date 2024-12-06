import Placeholder from "atoms/Placeholder";
import { useThemeContext } from "contexts/Theme";
import { useCategories } from "hooks/useCategories";
import SectionHeader from "molecules/SectionHeader";
import React from "react";
import { View } from "react-native";
import PieChart from "react-native-pie-chart";
import { s } from "react-native-size-matters/extend";
import styles from "./styles";

const SpendFrequency = () => {
  const {
    foodLength,
    salaryLength,
    shoppingLength,
    subscriptionLength,
    transportationLength,
    isLoading,
  } = useCategories();
  const { currentTheme } = useThemeContext();

  const widthAndHeight = s(100);
  const series = [
    shoppingLength,
    transportationLength,
    salaryLength,
    subscriptionLength,
    foodLength,
  ];
  const sliceColor = [
    currentTheme.YELLOW[100],
    currentTheme.BLUE[100],
    currentTheme.GREEN[100],
    currentTheme.VIOLET[100],
    currentTheme.RED[100],
  ];

  return (
    <View>
      <SectionHeader
        title="Spend Frequency"
        overrideContainerStyle={styles.container}
      />
      {isLoading && <Placeholder />}
      {!isLoading && (
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          style={styles.pieChart}
        />
      )}
    </View>
  );
};

export default SpendFrequency;
