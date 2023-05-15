import { createStackNavigator } from "@react-navigation/stack";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo } from '@expo/vector-icons';

import TopBar from "../components/TopBar";
import PostsScreen from "../Screens/main/PostsScreen";
import CreatePostsScreen from "../Screens/main/CreatePostsScreen";
import ProfileScreen from "../Screens/main/ProfileScreen";
import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import CommentsScreen from "../Screens/main/CommentsScreen";

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  
    if(!isAuth){
      return(
        <AuthStack.Navigator>
          <AuthStack.Screen 
            options={{
              headerShown: false,
            }} 
            name="Registration" 
            component={RegistrationScreen} 
          />
          <AuthStack.Screen 
            options={{
              headerShown: false,
            }} 
            name="Login" 
            component={LoginScreen} 
          />
        </AuthStack.Navigator>
      )
    }
    return(
      <MainTab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#212121',
        tabBarActiveBackgroundColor: '#FF6C00',
        tabBarItemStyle: {
          borderRadius: 100,
          maxWidth: 70,
          height: 40,
        },
        tabBarStyle: {
          borderColor: '#eeeeee',
          borderStyle: 'solid',
          borderWidth: 0,
          borderTopWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          height: 60
        },
        header: ({ navigation, route, options }) => {        
          return <TopBar navigation={navigation} route={route}/>;
        }
      }}
      
      >
        <MainTab.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
        />
        <MainTab.Screen 
        name="Create post" 
        component={CreatePostsScreen}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused, size, color}) => (
            <Entypo name="plus" size={size} color={color} />
          )
        }}
        />
        <MainTab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false
        }}
        />
      </MainTab.Navigator>
    )
}

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => {        
          return <TopBar navigation={navigation} route={route}/>;
        }
      }}
    >
      <Stack.Screen name="Posts" component={PostsScreen}
        options={{
          // headerShown: false
        }}
      />
      <Stack.Screen name="Comments" component={CommentsScreen} />
    </Stack.Navigator>
  );
}