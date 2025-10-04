import { useIsFocused } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../Components/Button';
import Error from '../../../Components/Error';
import Loader from '../../../Components/Loader';
import NetworkBanner from '../../../Components/NetworkBanner';
import { useGetUsersQuery } from '../../../Redux/API';
import { logout } from '../../../Redux/Slice';
import { font, heightPixel } from '../../../Utils/Dimensions';
import { navigate, navigateAndSimpleReset } from '../../../Utils/Navigate';
import colors from '../../../Utils/Theme';

const Home: FC = () => {
  const isFocus = useIsFocused();
  const dispatch = useDispatch();
  const {data, isError, isLoading, refetch, isFetching} = useGetUsersQuery();

  useEffect(() => {
    if (isFocus && !isLoading) {
      refetch();
    }
  }, [isFocus]);

  const handleLogout = () => {
    dispatch(logout());
    navigateAndSimpleReset('AuthNavigation');
  };

  if (isLoading && isFetching) {
    return <Loader />;
  }

  if (isError) {
    return <Error error={'Opps! An error occured!'} />;
  }

  return (
    <View style={styles.container}>
      <NetworkBanner />
      <Text style={styles.title}>All Users From API</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigate('Detail', {user: item})}
            style={[
              styles.item,
              index === (data?.length ?? 0) - 1 && styles.lastItem,
            ]}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        text="Logout"
        width={200}
        onPress={handleLogout}
        buttonStyles={{alignSelf: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: font(20),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: heightPixel(5),
  },
  item: {
    padding: '5%',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  username: {
    fontWeight: '600',
    fontSize: font(16),
    color: colors.black,
  },
  email: {
    fontSize: font(14),
    color: colors.gray,
  },
});

export default Home;
