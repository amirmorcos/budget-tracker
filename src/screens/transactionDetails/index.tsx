import AppText from "atoms/AppText";
import Card from "atoms/Card";
import { useThemeContext } from "contexts/Theme";
import { SectionHeader } from "molecules/index";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const TransactionDetails = () => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <ScreenLayout
      mainContainerStyle={themedStyles.container}
      navigationColor={currentTheme.LIGHT[100]}
      navigationTitle="Detail Transaction"
    >
      <View style={themedStyles.centeredContainer}>
        <AppText text="$120" overrideTextStyle={themedStyles.amount} />
        <AppText
          text="Saturday 4 June 2021 10:21"
          overrideTextStyle={themedStyles.time}
        />
      </View>
      <Card overrideContainerStyle={themedStyles.card}>
        <View style={themedStyles.gap}>
          <AppText text="Type" overrideTextStyle={themedStyles.infoTitle} />
          <AppText text="Expense" />
        </View>
        <View style={themedStyles.gap}>
          <AppText text="Category" overrideTextStyle={themedStyles.infoTitle} />
          <AppText text="Shopping" />
        </View>
      </Card>

      <SectionHeader
        overrideContainerStyle={themedStyles.descriptionTitle}
        title="Description"
        overrideTextStyle={themedStyles.description}
      />
      <AppText
        text="Buy afwfwqcqws"
        overrideTextStyle={themedStyles.descriptionValue}
      />
    </ScreenLayout>
  );
};

export default TransactionDetails;
