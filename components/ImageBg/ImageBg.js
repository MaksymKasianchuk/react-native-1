import { imageBgStyles } from "./ImageBgStyles";
import { ImageBackground } from 'react-native';
const ImageBg = ({ children }) => {
    return (
        <ImageBackground 
            style={imageBgStyles.wrapper}
            source={require("../../assets/photo_bg.png")}
        >
            {children}
        </ImageBackground>
    );
}

export default ImageBg;
