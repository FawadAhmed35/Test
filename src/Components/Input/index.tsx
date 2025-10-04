import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { font, heightPixel, widthPixel } from '../../Utils/Dimensions';
import colors from '../../Utils/Theme';

interface InputProps {
  value?: string;
  title: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  containerStyle?: any;
  inputStyle?: any;
}

const Input: FC<InputProps> = ({
  value,
  onChangeText,
  onBlur,
  placeholder,
  title,
  secureTextEntry = false,
  error,
  containerStyle,
  inputStyle,
}) => {
  return (
    <View style={{ marginTop: heightPixel(15) }}>
      {/* Title */}
      <Text
        style={{
          fontWeight: '500',
          fontSize: font(15),
          marginLeft: widthPixel(5),
          textDecorationLine: 'underline',
        }}>
        {title}
      </Text>

      {/* Input */}
      <View style={[styles.container, containerStyle, error && { borderColor: 'red' }]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur} // ✅ Now supports onBlur
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          secureTextEntry={secureTextEntry}
          style={[styles.input, inputStyle]}
        />
      </View>

      {/* Error Message */}
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPixel(5),
    height: heightPixel(50),
    width: widthPixel(300),
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: widthPixel(12),
    paddingHorizontal: widthPixel(10),
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
  },
  errorText: {
    marginTop: heightPixel(5),
    marginLeft: widthPixel(5),
    fontSize: font(12),
    color: 'red',
  },
});

export default Input;
