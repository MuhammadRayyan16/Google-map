import { StyleSheet, View } from 'react-native';
import Map from './Components/Map';

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make sure the Map component fills the entire screen
  },
});
