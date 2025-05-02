// ExpoSceneKit.types.ts
import type { StyleProp, ViewStyle } from 'react-native';

// Simplified props for the ExpoSceneKitView component
export type ExpoSceneKitViewProps = {
  style?: StyleProp<ViewStyle>;
  onViewReady?: (event: { nativeEvent: { uuid: string } }) => void;
  scenePath: string; // Required prop for the scene file path/URL
  // Add any other props your view accepts
};

// Interface for the module methods (not view methods)
export interface ExpoSceneKitModule {
  // Add any other module methods
}