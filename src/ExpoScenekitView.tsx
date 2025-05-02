// src/ExpoScenekitView.tsx
import { requireNativeViewManager } from 'expo-modules-core';
import React from 'react';
import { ExpoSceneKitViewProps } from './ExpoScenekit.types';

// Get the native view manager
const NativeSceneKitView: React.ComponentType<ExpoSceneKitViewProps> = requireNativeViewManager('ExpoSceneKit');

// Export the component
export default function ExpoSceneKitView(props: ExpoSceneKitViewProps) {
  // Only render if scenePath is provided
  if (!props.scenePath) {
    return null;
  }
  
  return <NativeSceneKitView {...props} />;
}