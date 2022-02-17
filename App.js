import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, SafeAreaView, Alert, TextInput, Image, ImageBackground, Dimensions} from 'react-native';
import ButtonWithBackground from './ButtonWithBackground';
import logo from './Images/bivy.png';
import bgImage from './Images/EduLangHomeScreen.png';
import Icon from 'react-native-vector-icons/Ionicons';


const {width: WIDTH} = Dimensions.get('window')

export default function App() {

    return (
    
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.LogoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.LogoText}>EduLang</Text>
        </View>

        <View>
          <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid = 'transparent'
          />
        </View>
        

        <View>
          <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid = 'transparent'
          />
        </View>


        <ButtonWithBackground text = 'Login' color='#004aad' />
  
      </ImageBackground>
      
    );

  }




const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LogoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120
  },
  LogoText: {
    color: '#0d00ad',
    fontSize: 40,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 20,
    
  },

  input: {
    width: WIDTH -55,
    height: 25,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    marginBottom: 10
  }

});

