import {
  CommonActions,
  DrawerActions,
  NavigationContainerRefWithCurrent,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
export type ParamList = {

  AuthNavigation: undefined;
  Login: undefined;

  AppNavigation: { screen?: keyof ParamList } | undefined;
  Home: undefined;
  Detail: any
 
};

export type GeneralScreenProps<T extends keyof ParamList> = StackScreenProps<
  ParamList,
  T
>;
export const navigationRef =
  createNavigationContainerRef<NavigationContainerRefWithCurrent<ParamList>>();

export const navigate = <RouteName extends keyof ParamList>(
  ...args: {
    [Screen in keyof ParamList]: undefined extends ParamList[Screen]
      ?
          | [screen: Screen]
          | [screen: Screen, params: ParamList[Screen]]
          | [screen: Screen, params: ParamList[Screen], merge: boolean]
      :
          | [screen: Screen, params: ParamList[Screen]]
          | [screen: Screen, params: ParamList[Screen], merge: boolean];
  }[RouteName]
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(args[0] as any, args[1]);
  }
};

const sda = <T extends keyof ParamList>(name: T) => {
  console.log(name);
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

export const toggleDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.toggleDrawer());
  }
};

export const navigateAndSimpleReset = (name: string, index: number = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
};

export const navigateAndReplace = (name: string) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name));
  }
};