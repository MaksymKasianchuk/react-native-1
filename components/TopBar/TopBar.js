import { topBarStyles } from "./TopBarStyles";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { useApp } from "../../hooks/useContext";

const TopBar = ({ navigation, route, backToPrev=false }) => {
  const { logOut } = useApp();
    return (
      <View style={topBarStyles.wrap}>
        
        {backToPrev && (
          <TouchableOpacity style={topBarStyles.goBack} onPress={() => { navigation.goBack(); }} activeOpacity={0.8}> 
            <AntDesign name="arrowleft" size={24} color={topBarStyles.goBackIcon} />
          </TouchableOpacity>
        )}

        <View>
          <Text style={topBarStyles.text}>{route.name}</Text>
        </View>

        {!backToPrev && (
          <TouchableOpacity style={topBarStyles.logOut} onPress={() => { logOut() }} activeOpacity={0.8}> 
            <MaterialIcons name="logout" size={24} style={topBarStyles.logOutIcon} />
          </TouchableOpacity>
        )}
      </View>
    )
}
export default TopBar;