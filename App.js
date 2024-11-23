import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
  // console.log('hello');
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Text onPress={() => console.log('hello clicked')} style={styles.header} >Sell_Hobe  </Text>
      <StatusBar style="auto" />

      <View>
        <Image style={styles.img} source={
          require('./assets/programming.png')} ></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: '#000000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    color: '#fff',
    fontSize: '40',
    padding: '20',
    backgroundColor: 'teal',
    borderEndColor: 'green',
    borderRadius: '20',
    borderTopEndRadius: '40'
  },
  img : {
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    marginTop: '20',
    borderRadius: '20',
    blurRadius: '10',
    
    
  }
});
