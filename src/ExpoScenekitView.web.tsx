import * as React from 'react';

import { ExpoScenekitViewProps } from './ExpoScenekit.types';

export default function ExpoScenekitView(props: ExpoScenekitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
