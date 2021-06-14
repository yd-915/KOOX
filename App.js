import  React from 'react';
import {
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  Linking
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {createStackNavigator} from '@react-navigation/stack'
import {Link, NavigationContainer} from '@react-navigation/native'
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};


const SECTIONS = [
  {
    title: 'KOOLECTION',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Ambient Pack',
        uri: 'https://i.ibb.co/vhZwxCv/Vibes-Pack.png',
      },
      {
        key: '2',
        text: 'Still Pack',
        uri: 'https://i.ibb.co/wQsK4rM/Still.png',
      },

      {
        key: '3',
        text: 'Gradient Pack',
        uri: 'https://i.ibb.co/GVMddVZ/First-pack.png',
      },
      {
        key: '4',
        text: 'Suns out pack',
        uri: 'https://i.ibb.co/4P9T45M/sunny.png',
      },
      {
        key: '5',
        text: 'Static pack',
        uri: 'https://i.ibb.co/4ZYVSj8/Estatic.png',
      },
      {
        key: '6',
        text: 'Vibrant pack',
        uri: 'https://i.ibb.co/d7XQDMX/Push.png',
      },
      {
        key: '7',
        text: 'Frozen pack',
        uri: 'https://i.ibb.co/5Mgxg6Q/frozen.png',
      },
    ],
  },
];



const CATEGORIES = [
  {
    title: 'MINIMALECTION',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Minimalist pack',
        uri: 'https://i.ibb.co/BGDBzpc/Screenshot-26.png',
      },
      {
        key: '2',
        text: 'Hidden Pack',
        uri: 'https://i.ibb.co/6Y288sJ/Screenshot-24.png',
      },

      {
        key: '3',
        text: 'Cold Pack',
        uri: 'https://i.ibb.co/3ps2PVM/Screenshot-25.png',
      },
      {
        key: '4',
        text: 'Inverted Pack',
        uri: 'https://i.ibb.co/nzwqbHj/Screenshot-28.png',
      },
      {
        key: '5',
        text: 'Glaze pack',
        uri: 'https://i.ibb.co/Px6Cyh8/Screenshot-29.png',
      },
      {
        key: '6',
        text: 'Fun pack',
        uri: 'https://i.ibb.co/8NQw6Jm/Screenshot-30.png',
      },
      {
        key: '7',
        text: 'le minimalist pack',
        uri: 'https://i.ibb.co/wg4Z008/Screenshot-31.png',
      },
    ],
  },
];
  




function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate("First")
  },3000)
  return(
     <ImageBackground style={{flex:1}} source={require('./lit.png')}/>
  )
}
function FirstScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./flash.png')}>
    <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Menu")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Welcome
          </Text>   
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.louch}
              onPress={() => navigation.navigate("Feed")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Info
          </Text>   
            </TouchableOpacity>
    </ImageBackground>

  )
}

function FeedScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./feedback.png')}>
    <Text 
      style={{fontSize:25, fontWeight:'normal', color: 'white', justifyContent:'center', marginTop:200, marginLeft: 60}}>
      Thank you for using KOOX!</Text>
    <Text 
      style={{fontSize:20, fontWeight:'normal', color: 'white', justifyContent:'center', marginTop:60, marginLeft: 10}}>All of my work are availble in the Icon Pack Studio app (Y_D).
      If you have any questions, please email me at info@koox.com or dm me on my socials. Thanks again for your support.</Text>
    <TouchableOpacity
              style={styles.slouch}
              onPress={() => Linking.openURL("https://www.instagram.com/y_d_koox/")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Follow Me 
          </Text>   
            </TouchableOpacity>
    <TouchableOpacity
              style={styles.mouch}
              onPress={() => Linking.openURL("market://details?id=com.yd.ko")}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Rate App
          </Text>   
            </TouchableOpacity>
    </ImageBackground>

  )
}
 function HomeScreen() {
  return (
    <View style={styles.pontainer}>
    <StatusBar style="light" />
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={true}
        sections={SECTIONS}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.horizontal ? (
              <FlatList
                horizontal
                pagingEnabled
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} />;
        }}
      />
    </SafeAreaView>
  </View>
);
};

function SecondScreen () {
  return (
    <View style={styles.sontainer}>
    <StatusBar style="light" />
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={true}
        sections={CATEGORIES}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={styles.sectionBeader}>{section.title}</Text>
            {section.horizontal ? (
              <FlatList
                horizontal
                pagingEnabled
                data={section.data}
                renderItem={({ item }) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({ item, section }) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} />;
        }}
      />
    </SafeAreaView>
  </View>
);
};

function MenuScreen({navigation}) {
  return(
    <ImageBackground style={{flex:1}} source={require('./static.png')}>
      <Text style={{fontSize: 50, color: 'white', letterSpacing: 10, justifyContent: 'center', alignContent:'center', marginLeft: 115, marginTop: 20}}>MENU</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
      <Image
       style={{width: 150, height: 150, marginLeft: 130, marginTop: 60}} source={require('./KLOGO.png')}/>
       </TouchableOpacity>
       
       <TouchableOpacity
        onPress={() => navigation.navigate('Second')}>
        <Image
       style={{width: 150, height: 150, marginLeft: 130, marginTop: 140}} source={require('./MINLOGO.png')}/>
       </TouchableOpacity> 
      
      <TouchableOpacity
              style={styles.houch}
              onPress={() => navigation.navigate('First')}>
           <Text
          style={{fontSize:30, justifyContent: 'center', alignItems: 'center', color:'purple'}}>
            Back
          </Text>   
            </TouchableOpacity>
            </ImageBackground>
  )
}


const Stack = createStackNavigator();
function MyStacks() {
  return(
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
    <Stack.Screen name="Splash" component={SplashScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="First" component={FirstScreen}/>
    <Stack.Screen name="Feed" component={FeedScreen}/>
    <Stack.Screen name="Second" component={SecondScreen}/>
    <Stack.Screen name="Menu" component={MenuScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStacks/>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: 500,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 25,
    height:50
   },
   louch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginBottom: 500,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "rgb(255,228,196)",
    borderRadius: 25,
    height:50,
   },
   pouch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    marginTop: 50,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "rgb(255,228,196)",
    borderRadius: 25,
    height:50
   },
   slouch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginTop: 100,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 25,
    height:50
   },
   mouch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 60,
    marginBottom: 500,
    marginRight: 40,
    margin:15,
    width: "70%",
    backgroundColor: "white",
    borderRadius: 25,
    height:50
   },
   pontainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 25,
    color: '#f4f4f4',
    marginTop: 80,
    marginLeft:100,
    letterSpacing: 5
  },
  item: {
    margin: 48,
  },
  itemPhoto: {
    width: 350,
    height: 350,
    borderColor: 'gold',
    padding: 40,
    marginTop:100,
    marginLeft: -50,
   
  },
  itemText: {
    color: '#F7D22F',
    marginTop: 10,
    marginLeft: 80
  },
  sontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  houch: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 105,
    marginTop: 450,
    marginRight: 40,
    margin:15,
    width: "50%",
    backgroundColor: "rgb(255,228,196)",
    borderRadius: 25,
    height:50,
   },
   sectionBeader: {
    fontWeight: '800',
    fontSize: 25,
    color: 'black',
    marginTop: 80,
    marginLeft:70,
    letterSpacing: 5
  },
});