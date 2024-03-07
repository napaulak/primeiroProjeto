import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ana Paula Ferreira</Text>
      <Text>Desenvolvimento de dispositivos móveis - 22 fev. 2024</Text>
     <Title/>
      <StatusBar style="auto" />
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