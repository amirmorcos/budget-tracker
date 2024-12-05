import { StyleProp, ViewStyle } from "react-native";

export type ScreenLayoutProps = {
  children: React.ReactNode;
  navigationTitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  enableScroll?: boolean;
  mainContainerStyle?: StyleProp<ViewStyle>;
  navigationColor?: string;
};
