import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { postListStyles } from './PostListStyles';
import { 
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

const PostListItem = ({ item }) => {
    const [ isLiked, setIsLiked ] = useState(false);
    const firstRender = useRef(true);
    const {name, mail, avatar, thumbnail, postTitle, comments, likes, location} = item;
    const [ countedLikes, setCountedLikes ] = useState(likes);
    const navigation = useNavigation();

    useEffect(()=>{
        if(firstRender.current){
            firstRender.current = false;
            return;
        }
        if(isLiked){
            setCountedLikes(prevLikes=> prevLikes + 1);
        } else {
            setCountedLikes(prevLikes=> prevLikes - 1);
        }
    }, [isLiked]);

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width - 30;
    return (
        <View style={postListStyles.item}>
            {/* Post Header */}
             <View style={postListStyles.itemHeader} >
                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={postListStyles.avatar} source={{ uri: avatar }} />
                </TouchableOpacity>
                <View>
                    <Text style={postListStyles.name}>{name}</Text>
                    <Text style={postListStyles.mail}>{mail}</Text>
                </View>
            </View>

            {/* Post Body */}
            <View>
                {/* Post Thumbnail */}
                <TouchableOpacity activeOpacity={0.8}>
                    <Image 
                        style={
                            {
                                ...postListStyles.thumb, 
                                width: imageWidth, 
                                height: imageHeight
                            }
                        } 
                        source={{ uri: thumbnail }} 
                    />
                </TouchableOpacity>

                 {/* Post Title */}
                <View style={postListStyles.titleWrap}>
                    <Text style={postListStyles.title}>{postTitle}</Text>
                </View>

                {/* Post Meta */}
                <View style={postListStyles.metaWrap}>
                    <View style={postListStyles.metaLeft}>

                        {/* Post Comments */}
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={postListStyles.metaItem} 
                            onPress={()=>{
                                navigation.navigate('Home', {
                                    screen: 'Comments',
                                    params: { thumbnail },
                                });
                            }}
                        >
                            <EvilIcons name="comment" size={24} style={postListStyles.metaIcon}/>
                            <Text style={postListStyles.metaComments}>{comments}</Text>
                        </TouchableOpacity>

                        {/* Post Likes */}
                        <TouchableOpacity 
                            activeOpacity={0.8}
                            style={postListStyles.metaItem} 
                            onPress={()=>setIsLiked(prevLike=>!prevLike)}
                        >
                            <EvilIcons name="like" size={24} style={
                                {
                                    ...postListStyles.metaIcon, 
                                    color: isLiked ? '#FF6C00' : '#BDBDBD',
                                }
                            }/>
                            <Text style={{
                                ...postListStyles.metaLikes,
                                color: isLiked ? '#FF6C00' : '#BDBDBD',
                            }}>{countedLikes}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Post Location */}
                    <View style={postListStyles.metaItem}>
                        <EvilIcons name="location" size={24} style={postListStyles.metaIcon}/>
                        <Text style={postListStyles.metaLocation}>{location}</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

export default PostListItem;
