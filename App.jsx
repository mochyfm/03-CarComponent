import { StyleSheet, StatusBar, Text, View } from 'react-native';
import uuid from 'react-native-uuid';
import DisplayHourTemp from './components/DisplayHourTemp';

export default function App() {
   const users = [
      { id: 0, userName: 'Guest' },
      { id: uuid.v4(), userName: 'David' },
      { id: uuid.v4(), userName: 'Sandra' },
   ];

   return (
      <View style={styles.container}>
         <StatusBar hidden={true} />
         <View style={styles.paragraph}>
            <Text style={[styles.text, styles.title]}>Warning -</Text>
            <Text style={styles.text}>
               Do no let the system distract you from the traffic situation.
            </Text>
         </View>
         <View style={styles.info}>
            <DisplayHourTemp style={styles.text} />
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#000',
   },
   info: {
      marginLeft: 60,
      marginTop: 100
   },
   paragraph: {
      alignItems: 'center',
   },
   text: {
      color: '#FFF',
      fontSize: 35,
   },
   title: {
      fontSize: 40,
   },
});
