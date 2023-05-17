import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usrAvatarStyles } from './UserAvetarStyles';
import { 
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

const UserAvetar = ({ imageLoaded = true }) => {
    const [isImgLoaded, setIsImgLoaded] = useState(imageLoaded);
    const userImg = isImgLoaded ? require("../../assets/user.png") : require("../../assets/emptyUser.png");
    return (
        <View style={usrAvatarStyles.userImgWrap} >
            <Image style={usrAvatarStyles.userImg} source={userImg} />
            
            <TouchableOpacity 
                activeOpacity={0.8}
                style={{
                    ...usrAvatarStyles.imgSwitch,
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
    );
}

export default UserAvetar;
