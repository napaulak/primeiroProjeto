import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Title from '.';
import Anapaula from './main';

export default function App() {
  return (
    <View style={styles.container}>
      
   <Anapaula> </Anapaula>
     <Title/>
      
      <StatusBar style="auto"></StatusBar>
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