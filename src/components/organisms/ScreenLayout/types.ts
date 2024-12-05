import { StyleProp, ViewStyle } from "react-native";

export type ScreenLayoutProps = {
  children: React.ReactNode;
  navigationTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  enableScroll?: boolean;
};
