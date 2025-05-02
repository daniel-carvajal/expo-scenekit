import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpoSceneKitModule, { ExpoScenekitView } from 'expo-scenekit';
import { Asset } from "expo-asset";

export default function App() {
  // State to hold the UUID of the native view
  const [scenePath, setScenePath] = useState<any>(null);

  useEffect(() => {
    (async () => {
      // Load Scene file
      const [{ localUri }] = await Asset.loadAsync(require('./assets/scenes/ship.scn'));
      setScenePath(localUri);
    })();
  }, []);

  const handleViewReady = (event: { nativeEvent: { uuid: string } }) => {
    console.log('SceneKit view ready with UUID:', event.nativeEvent.uuid);
  };

  return (
    <View style={styles.container}>
      {scenePath && (
        <ExpoScenekitView
          style={styles.sceneView}
          scenePath={scenePath}
          onViewReady={handleViewReady} // Pass the callback prop
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sceneView: {
    flex: 1, // Make sure the view takes up space
  },
  buttonContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});