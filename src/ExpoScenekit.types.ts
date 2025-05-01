import type { StyleProp, ViewStyle } from 'react-native';

// Simplified props for the ExpoSceneKitView component
export type ExpoSceneKitViewProps = {
  style?: StyleProp<ViewStyle>;
  // We don't need any other props for the minimal implementation
};

// Empty interface for the module
export interface ExpoSceneKitModule {
  // Empty for now - we can add methods later as needed
}