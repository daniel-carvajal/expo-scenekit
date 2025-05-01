import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScenekitModuleEvents } from './ExpoScenekit.types';

declare class ExpoScenekitModule extends NativeModule<ExpoScenekitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoScenekitModule>('ExpoScenekit');
