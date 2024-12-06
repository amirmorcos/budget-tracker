import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import styles from "./styles";
import { BottomSheetProps } from "./types";
import { useThemeContext } from "contexts/Theme";

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ children, overrideContainerStyle }, ref) => {
    const { currentTheme } = useThemeContext();

    const renderBackdrop = React.useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.7}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        enableDynamicSizing
        backdropComponent={renderBackdrop}
        style={overrideContainerStyle}
        ref={ref}
        backgroundStyle={{
          backgroundColor: currentTheme.LIGHT[100],
        }}
      >
        <BottomSheetScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
        >
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);

export default BottomSheet;
