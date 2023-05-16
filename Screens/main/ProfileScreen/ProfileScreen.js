import PostListItem from '../../../components/PostList/PostListItem';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from "../../../hooks/useContext";
import { somePosts } from '../../../constants/somePosts';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    Pressable,
    Text,
    SafeAreaView,
    Image,
    ImageBackground
} from 'react-native';

const ProfileScreen = () => {
    const [isImgLoaded, setIsImgLoaded] = useState(true);
    const { logOut, getUserInfo } = useApp();
    const { login } = getUserInfo();

    const userImg = isImgLoaded ? require("../../../assets/user.png") : require("../../../assets/emptyUser.png");
    return (
        <ImageBackground 
        style={{flex: 1}}
        source={require("../../../assets/photo_bg.png")}
        >
              <ScrollView style={{}}>
                    <SafeAreaView style={{flex: 1}}>
                        <View>
                            
                            {/* HEADER */}
                            <View>
                                {/* HEADER AVATAR*/}
                                <View style={{}} >
                                    <Image style={{}} source={userImg} />
                                    
                                    <TouchableOpacity 
                                        activeOpacity={0.8}
                                        style={{
                                            ...{},
                                            borderColor: isImgLoaded ? "#BDBDBD" : "#FF6C00",
                                        }}
                                        onPress={() => setIsImgLoaded((prevState) => !prevState)}
                                    >
                                        <FontAwesomeIcon 
                                            style={{color: isImgLoaded ? "#BDBDBD" : "#FF6C00"}} 
                                            icon={ isImgLoaded ? faXmark : faPlus } 
                                        />
                                    </TouchableOpacity>
                                </View>
                                
                                {/* HEADER LogOut*/}
                                <TouchableOpacity style={{}} onPress={() => { logOut() }} activeOpacity={0.8}> 
                                    <MaterialIcons name="logout" size={24} style={{}} />
                                </TouchableOpacity>

                                {/* HEADER User name*/}
                                <Text style={{}}>{login}</Text>
                            </View>
                            
                            {/* Comments List */}
                            <Pressable style={{ flex: 1}}>
                                <View>
                                    {somePosts.map((item) => (
                                        <PostListItem key={item.id} item={item} />
                                    ))}
                                </View>
                            </Pressable>

                        </View>
                    </SafeAreaView>
              </ScrollView>
        </ImageBackground>
    )
}

export default ProfileScreen;
