import * as React from 'react'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'

export default class AddNewBook extends React.Component {
    render() {
        return (
            <View style={ styles.container}>
                <Text style={{
                  fontSize: 40,
                  marginTop: 20,
                  color: '#0d47a1'
                }}> Add Book </Text>
                

                <View style={{}}>
                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "ISBN"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Author"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Publisher"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Price"
                />
                </View>

                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    }}>
                    <TouchableOpacity 
                    style={{
                      backgroundColor: '#0d47a1',
                      padding: 15,
                      width: 150,
                      borderRadius: 30,
                    }}>
                      <Text
                      onPress={() => this.props.navigation.navigate('ViewBooks')} 
                      style={{
                        color: '#FFF',
                        fontSize: 16,
                        textAlign: 'center',
                      }}>Save Book</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
    },
});