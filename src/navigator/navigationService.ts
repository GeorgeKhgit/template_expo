import {createNavigationContainerRef} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params?: any) {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.navigate(name, params);
  }
}

export const replace = (routeName: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: routeName, params: params}],
    });
  }
};
