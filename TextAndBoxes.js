import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextAndBoxes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ini adalah komponen teks</Text>
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3', // Abu-abu Terang
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  box: {
    width: 100,
    height: 100,
  },
});

export default TextAndBoxes;