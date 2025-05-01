import { registerWebModule, NativeModule } from 'expo';

import { ExpoScenekitModuleEvents } from './ExpoScenekit.types';

class ExpoScenekitModule extends NativeModule<ExpoScenekitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoScenekitModule, 'ExpoScenekitModule');
