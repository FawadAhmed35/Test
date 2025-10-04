import {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {font, heightPixel, widthPixel} from '../../Utils/Dimensions';
import colors from '../../Utils/Theme';

interface ButtonProps {
  height?: number;
  width?: number;
  disable?: boolean;
  text: string;
  textStyles?: any;
  buttonStyles?: any;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({
  height,
  width,
  disable,
  text,
  textStyles,
  buttonStyles,
  onPress,
}) => {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress}>
      <LinearGradient
        colors={[colors.black, colors.red]} // left to right gradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          {
            height: heightPixel(height ?? 50),
            width: widthPixel(width ?? 100),
            borderRadius: widthPixel(20),
            margin: heightPixel(50),
            justifyContent: 'center',
            alignItems: 'center',
          },
          buttonStyles,
        ]}>
        <Text
          numberOfLines={1}
          style={[
            textStyles,
            {color: colors.white, fontSize: font(15), fontWeight: '600'},
          ]}>
          {text ?? 'Button Text'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
