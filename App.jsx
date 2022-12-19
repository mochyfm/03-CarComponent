import { ScrollView, StyleSheet, StatusBar, View } from 'react-native';

export default function App() {
   return (
      <View style={styles.container}>
         <StatusBar hidden={true} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
