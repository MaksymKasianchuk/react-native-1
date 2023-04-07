import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo } from '@expo/vector-icons';

import TopBar from "../components/TopBar";
import PostsScreen from "../Screens/main/PostsScreen";
import CreatePostsScreen from "../Screens/main/CreatePostsScreen";
import ProfileScreen from "../Screens/main/ProfileScreen";
import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";


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
        name="Posts" 
        component={PostsScreen} 
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="grid" size={size} color={color} />
          )
        }}
        />
        <MainTab.Screen 
        name="Create post" 
        component={CreatePostsScreen}
        options={{
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
          )
        }}
        />
      </MainTab.Navigator>
    )
}
