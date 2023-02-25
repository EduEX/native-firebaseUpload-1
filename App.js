import { StyleSheet, View } from 'react-native';
import ScreenUpload from './src/ScreenUpload';

export default function App() {
  return (
    <View style={styles.container}>
      <ScreenUpload/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
