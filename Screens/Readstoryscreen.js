import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Readstoryscreen() {
    return (
      <View style={styles.container}>
        <Text>Read Story</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  