import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function TestScreen() {
  return (
    <ScrollView style={styles.container}>

    </ScrollView>
  );
}

TestScreen.navigationOptions = {
  title: 'Test',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
