// src/ExpoScenekitView.tsx
import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import { ViewProps } from 'react-native';

// Define minimal props
export type ExpoSceneKitViewProps = ViewProps;

// Get the native view manager
const NativeView = requireNativeViewManager('ExpoSceneKit');

// Export a simple component with no ref methods
export default function ExpoSceneKitView(props: ExpoSceneKitViewProps) {
  return <NativeView {...props} />;
}