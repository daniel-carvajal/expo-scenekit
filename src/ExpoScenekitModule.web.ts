import { registerWebModule, NativeModule } from 'expo-modules-core';

/**
 * Web fallback for ExpoSceneKit module
 * This provides a basic implementation for web, but full SceneKit functionality
 * will require platform-specific code
 */
class ExpoSceneKitModule extends NativeModule {
  // Empty for now, as we don't need any methods for the minimal implementation
}

// export default registerWebModule(ExpoSceneKitModule);
export default registerWebModule(ExpoSceneKitModule, 'ExpoSceneKitModule');
