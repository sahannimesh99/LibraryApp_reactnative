import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screen/Home'
import Login from './screen/Login'
import SignUp from './screen/SignUp'
import ViweBooks from './screen/ViweBooks'
import AddNewBook from './screen/AddNewBook'


const Stack = createStackNavigator();

export default class App extends React.Component {
render() {
return (
<View style={styles.container}>
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="SignUp" component={SignUp} />
<Stack.Screen name="ViewBooks" component={ViweBooks} />
<Stack.Screen name="AddNewBook" component={AddNewBook} />
</Stack.Navigator>
</NavigationContainer>
</View>
)
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffffff',
},
})