import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoScenekitViewProps } from './ExpoScenekit.types';

const NativeView: React.ComponentType<ExpoScenekitViewProps> =
  requireNativeView('ExpoScenekit');

export default function ExpoScenekitView(props: ExpoScenekitViewProps) {
  return <NativeView {...props} />;
}
