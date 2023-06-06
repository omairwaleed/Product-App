import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {  StyleSheet } from 'react-native'
import MainScreen from "./screens/MainScreen";
import ItemScreen from "./screens/ItemScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={MainScreen} options={{
         headerStyle: styles.header,
         headerTitleStyle: styles.headerTitle,
        }} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f1f9ff',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});