import { useRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const ExampleComponent = forwardRef(({}, ref) => {
  const myRef = useRef(false);

  const styles = StyleSheet.create({
    myView: {
      flex: 1,
    }
  });

  return (
    <View style={styles.myView}>
      <Text>Hello</Text>
    </View>
  );
});