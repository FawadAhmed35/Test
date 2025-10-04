import {useRoute} from '@react-navigation/native';
import {FC} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {font, heightPixel, widthPixel} from '../../../Utils/Dimensions';
import colors from '../../../Utils/Theme';

const Detail: FC = () => {
  const route = useRoute<any>();
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Details</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Basic Info</Text>
        <Text style={styles.item}>ID: {user.id}</Text>
        <Text style={styles.item}>Name: {user.name}</Text>
        <Text style={styles.item}>Username: {user.username}</Text>
        <Text style={styles.item}>Email: {user.email}</Text>
        <Text style={styles.item}>Phone: {user.phone}</Text>
        <Text style={styles.item}>Website: {user.website}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Address</Text>
        <Text style={styles.item}>Street: {user.address.street}</Text>
        <Text style={styles.item}>Suite: {user.address.suite}</Text>
        <Text style={styles.item}>City: {user.address.city}</Text>
        <Text style={styles.item}>Zipcode: {user.address.zipcode}</Text>
        <Text style={styles.item}>
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Company</Text>
        <Text style={styles.item}>Name: {user.company.name}</Text>
        <Text style={styles.item}>
          Catch Phrase: {user.company.catchPhrase}
        </Text>
        <Text style={styles.item}>BS: {user.company.bs}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(25),
    paddingVertical: heightPixel(50)
  },
  header: {
    fontSize: font(20),
    fontWeight: 'bold',
    marginBottom: heightPixel(15),
    textAlign: 'center',
  },
  section: {
    marginBottom: heightPixel(15),
    padding: widthPixel(10),
    borderRadius: widthPixel(10),
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: font(18),
    fontWeight: '600',
    marginBottom: widthPixel(5),
  },
  item: {
    color: '#333',
    fontSize: font(15),
    marginBottom: heightPixel(5),
  },
});

export default Detail;
