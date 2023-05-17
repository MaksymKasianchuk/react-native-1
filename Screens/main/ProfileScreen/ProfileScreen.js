import PostListItem from '../../../components/PostList/PostListItem';
import { useState } from "react";
import UserAvetar from "../../../components/UserAvatar";
import { profileScreenStyles } from './ProfileScreenStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { useApp } from "../../../hooks/useContext";
import { myPosts } from '../../../constants/myPosts';
import { 
    View,
    ScrollView,
    TouchableOpacity,
    Pressable,
    Text,
    SafeAreaView,
    ImageBackground
} from 'react-native';

const ProfileScreen = () => {
    const { logOut, getUserInfo } = useApp();
    const { login } = getUserInfo();

    return (
        <ImageBackground 
        style={profileScreenStyles.imageBackground}
        source={require("../../../assets/photo_bg.png")}
        >
              <ScrollView style={profileScreenStyles.scrollView}>
                    <SafeAreaView style={profileScreenStyles.contentWrap}>
                        <View style={profileScreenStyles.content}>
                            
                            {/* HEADER */}
                            <View style={profileScreenStyles.header}>
                                {/* HEADER AVATAR*/}
                                <View style={profileScreenStyles.avatarWrap}>
                                    <UserAvetar />
                                </View>
                                
                                {/* HEADER LogOut*/}
                                <TouchableOpacity style={profileScreenStyles.logOut} onPress={() => { logOut() }} activeOpacity={0.8}> 
                                    <MaterialIcons name="logout" size={24} style={profileScreenStyles.logOutIcon} />
                                </TouchableOpacity>

                                {/* HEADER User name*/}
                                <Text style={profileScreenStyles.name}>{login}</Text>
                            </View>
                            
                            {/* Comments List */}
                            <Pressable style={{ flex: 1}}>
                                <View style={profileScreenStyles.postsList}>
                                    {myPosts.map((item) => (
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
