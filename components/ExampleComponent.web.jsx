import { StyleSheet } from 'react-native-unistyles';
import { InnerComponent } from '@/components/InnerComponent';

export const ExampleComponent = ({}) => {
  return (
    <InnerComponent style={[styles.card]}/>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "gray"
  },
});
