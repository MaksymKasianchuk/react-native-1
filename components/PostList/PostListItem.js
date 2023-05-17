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
    const {name, mail, avatar, thumbnail, postTitle, comments, likes, location} = item;
    const firstRender = useRef(true);
    
    const [ isLiked, setIsLiked ] = useState(false);
    const [ dimensions, setdimensions ] = useState( Dimensions.get("window").width - 30 );
    const [ countedLikes, setCountedLikes ] = useState(likes);
    const navigation = useNavigation();
    
    const imageHeight = Math.round(dimensions * 9 / 16);

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

    // useEffect(() => {
    //     const onChange = () => {
    //         const width = Dimensions.get("window").width - 30;
        
    //         setdimensions(width);
    //     };
    //     Dimensions.addEventListener("change", onChange);
    //     return () => {
    //         Dimensions.removeEventListener("change", onChange);
    //     };
    // }, []);

    return (
        <View style={postListStyles.item}>
            {/* Post Header */}
            { name && mail && avatar && (
            <View style={postListStyles.itemHeader} >
                <TouchableOpacity activeOpacity={0.8}>
                    <Image style={postListStyles.avatar} source={{ uri: avatar }} />
                </TouchableOpacity>
                <View>
                    <Text style={postListStyles.name}>{name}</Text>
                    <Text style={postListStyles.mail}>{mail}</Text>
                </View>
            </View>)}

            {/* Post Body */}
            <View style={{flex: 1}}>
                {/* Post Thumbnail */}
                <TouchableOpacity activeOpacity={0.8}>
                    <Image 
                        style={
                            {
                                ...postListStyles.thumb, 
                                width: dimensions, 
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
