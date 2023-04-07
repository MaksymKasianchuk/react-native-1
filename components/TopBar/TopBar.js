import { topBarStyles } from "./TopBarStyles";
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from "../../hooks/useContext";

const TopBar = ({ navigation, route }) => {
  const { logOut } = useApp();
    return (
      <View style={topBarStyles.wrap}>
        <View>
          <Text style={topBarStyles.text}>{route.name}</Text>
        </View>
        <TouchableOpacity style={topBarStyles.logOut} onPress={() => { logOut() }} activeOpacity={0.8}> 
          <MaterialIcons name="logout" size={24} style={topBarStyles.logOutIcon} />
        </TouchableOpacity>
      </View>
    )
}
export default TopBar;