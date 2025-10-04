import {Formik} from 'formik';
import {FC} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import {useLogin} from '../../../Hooks/useLogin';
import {font, heightPixel, widthPixel} from '../../../Utils/Dimensions';
import colors from '../../../Utils/Theme';
import icons from '../../../Assets/Icons';

const Login: FC = () => {
  const {LoginSchema, handleLogin, loading} = useLogin();

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.white}}
      behavior={'padding'}
      keyboardVerticalOffset={0}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: widthPixel(20),
        }}
        keyboardShouldPersistTaps="handled">
        <Image
          source={icons.appicoders}
          style={{
            width: widthPixel(250),
            height: heightPixel(100),
            resizeMode: 'contain',
            backgroundColor: colors.red,
            borderRadius: widthPixel(25),
            overflow: 'hidden',
            marginBottom: heightPixel(25)
          }}
        />
        <Text
          style={{
            fontSize: font(25),
            fontWeight: 'bold',
            marginBottom: widthPixel(50),
          }}>
          Login Screen
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={LoginSchema}
          onSubmit={values => handleLogin(values)}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            handleBlur,
          }) => (
            <View style={{width: '100%', alignItems: 'center'}}>
              <Input
                title="Email"
                placeholder="Enter Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email ? errors.email : ''}
              />

              <Input
                title="Password"
                placeholder="Enter Password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />

              <Button
                width={250}
                text={loading ? 'Logging in...' : 'Login'}
                disable={loading}
                onPress={handleSubmit as any}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
