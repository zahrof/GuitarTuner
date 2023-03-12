import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface CircleButtonProps {
    onPress: () => void;
    label: string;
  }

const CircleButton = ({ onPress, label }: CircleButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 100,
    height: 100,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CircleButton;