import { primBtn } from './PrimaryButtonStyles';
import { Text, TouchableOpacity } from 'react-native';

const PrimaryButton = ({text, handler, disabled = false}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={{ ...primBtn.primButton,
                backgroundColor: disabled ? '#F6F6F6' : '#FF6C00',
            }}
            onPress={disabled ? () => {} : handler}
        >
            <Text style={{
                ...primBtn.buttonTxt,
                color: disabled ? '#BDBDBD' : '#ffffff',
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
};

export default PrimaryButton;
