// ExpoSceneKitModule.ts
import { requireNativeModule } from 'expo-modules-core';
import { ExpoSceneKitModule } from './ExpoScenekit.types';

// Use a different variable name to avoid collision with the type
const ExpoSceneKitModuleInstance = requireNativeModule<ExpoSceneKitModule>('ExpoSceneKit');

// Export the native module instance
export default ExpoSceneKitModuleInstance;