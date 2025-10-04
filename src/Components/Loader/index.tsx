import { ActivityIndicator, View } from 'react-native';
import colors from '../../Utils/Theme';

const Loader = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} color={colors.black} />
    </View>
  );
};

export default Loader;
