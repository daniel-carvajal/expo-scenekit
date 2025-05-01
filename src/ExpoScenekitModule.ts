import { requireNativeModule } from 'expo-modules-core';

// Create a basic interface for the module
interface ExpoSceneKitModule {
  // Empty for now, as we don't need any methods for the minimal implementation
}

// Get the native module
const ExpoSceneKitModule = requireNativeModule<ExpoSceneKitModule>('ExpoSceneKit');

// Export the native module
export default ExpoSceneKitModule;