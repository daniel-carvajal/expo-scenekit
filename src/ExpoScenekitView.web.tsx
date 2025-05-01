import * as React from 'react';

import { ExpoSceneKitViewProps } from './ExpoScenekit.types';

export default function ExpoSceneKitView(props: ExpoSceneKitViewProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      padding: 20,
      backgroundColor: '#f0f0f0',
      border: '1px dashed #ccc',
      borderRadius: 8,
      color: '#666'
    }}>
      ExpoSceneKit is not supported on web platform
    </div>
  );
}
