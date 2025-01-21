import { StyleSheet } from 'react-native-unistyles';
import { InnerComponent } from '@/components/InnerComponent';

export const ExampleComponent = ({}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "gray"
    },
  });

  return (
    <InnerComponent style={{ ...styles.card }}/>
  );
}