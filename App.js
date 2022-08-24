import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
// import CategoriesScreens from './screens/CategoriesScreens';
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from './navigators/Pages';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <Pages />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});
