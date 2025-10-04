import { FC } from 'react';
import { Text, View } from 'react-native';

interface ErrorProps {
  error: string;
}

const Error: FC<ErrorProps> = ({error}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{error}</Text>
    </View>
  );
};

export default Error;
