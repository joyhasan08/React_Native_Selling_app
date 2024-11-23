import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image,TouchableWithoutFeedback,TouchableOpacity, Button,Alert } from 'react-native';

export default function App() {
  // console.log('hello');
  
  return (
    <SafeAreaView style={styles.container}>
      
      <Text onPress={() => console.log('hello clicked')} style={styles.header} >Sell_Hobe </Text>
      <StatusBar style="auto" />

      <View>
        <TouchableOpacity style={styles.able} onPress={() => console.log('image clicked')}>

          <Image resizeMode='contain' style={styles.img} source={
          require('./app/assets/splash-icon.png')} >
          </Image>
        </TouchableOpacity>

        <Text numberOfLines={4} lineBreakStrategyIOS='clip' style={{fontSize: '16', padding: '20'}}>
          🚀 Ready for a deep dive? 
          Check out my full course: https://mosh.link/react-native-course 
          Subscribe for more awesome content: https://goo.gl/6PYaGF

          ✋ Stay connected:
          Twitter:   / moshhamedani  
          Facebook:  / moshhamedani
        </Text>

      </View>

      <Button title='Click Me' onPress={() => alert('Button Clicked')} />

      <Button title='Click Me Again' onPress={() => 
        Alert.alert("My Title" ,"My Message",[{text: 'OK', text: 'Ignore me'}])} />

      <Button title='Click Prompt' onPress={() => 
        Alert.prompt('My Title 2', 'My massage 2', text => console.log(text))
      } />

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
    borderColor: 'skyblue',
    borderWidth: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'Courier New',
    margin: '20',
    borderCurved: true,
    borderStyle: 'solid',

    
  },
  img : {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  able: {
    width: '70%',
    height: '50%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20  
  }
});
