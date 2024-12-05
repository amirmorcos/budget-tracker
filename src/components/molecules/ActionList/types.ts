import { StyleProp, ViewStyle } from "react-native";

type ListItem = {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
};

export type ActionListProps = {
  items: ListItem[];
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
