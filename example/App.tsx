import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpoScenekitView } from 'expo-scenekit';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpoScenekitView style={styles.sceneView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneView: {
    flex: 1,
  },
});