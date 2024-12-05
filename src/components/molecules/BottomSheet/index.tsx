import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import styles from "./styles";
import { BottomSheetProps } from "./types";

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ children, overrideContainerStyle }, ref) => {
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
