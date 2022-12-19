import { Text, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function DisplayHourTemp({ style }) {
   
   const setMessageByHour = () => {
      if (new Date().getHours() > 7 && new Date().getHours() < 12) {
         return `Good morning.`
      } else if (new Date().getHours() >= 12 && new Date().getMinutes() <= 15) {
         return `Good midday.`
      } else if (new Date().getHours() > 15 && new Date().getMinutes < 19) {
         return `Good afternoon.`
      } else {
         return `Good night.`
      }
   }

   const [timeMessage, setTimeMessage] = useState(setMessageByHour())
   const [timeDisplay, setTimeDisplay] = useState(
      `${new Date().getHours()}:${new Date().getMinutes()}`
   );
   const [temp, setTemp] = useState(
      `${Math.trunc(1 + (Math.random() * -10 + 30) + -10)} ºC`
   );

   useEffect(() => {
      setInterval(
         () => {
            setTimeMessage(setMessageByHour());
            setTimeDisplay(`${new Date().getHours()}:${new Date().getMinutes()}`)
            setTemp(`${Math.trunc(1 + (Math.random() * -10 + 30) + -10)} ºC`)
         }, 15000
      );
   }, []);

   return (
      <View style={styles.container}>
         <View style={styles.info}>
            <Text style={[{ ...style }, styles.title]}>{timeMessage}</Text>
            <Text style={[{ ...style }, styles.subtitle]}>
               {timeDisplay}, {temp}
            </Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      color: '#FFF',
      fontSize: 30,
   },
   subtitle: {
      color: '#666',
      fontSize: 23,
      fontWeight: '600',
      marginTop: 10,
   },
});
