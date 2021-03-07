import * as React from 'react'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'

export default class SignUp extends React.Component {
    render() {
        return (
            <View style={ styles.container}>
                <Text style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  marginTop: 20,
                  color: '#0d47a1'
                }}> Sign Up </Text>
                
                <Image 
                  style={{
                    width: "100%",
                    height: 200,
                  }}
                  source={require('../assets/signUp.jpg')}
                  resizeMode="contain"
                />

                <View style={{}}>
                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Full Name"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Email"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Password"
                />

                <TextInput 
                  style={{
                    width: 200,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    paddingTop: 10,
                  }}
                    placeholder= "Confirm Password"
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
                      }}>Sign Up</Text>
                    </TouchableOpacity>

                    

                    <View 
                    style={{
                      flexDirection: 'row',
                      marginTop: 30,
                    }}>
                      <View style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40/2,
                        backgroundColor: '#0000ff',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Text 
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: '#FFF',
                        }}>f</Text>
                      </View>

                      <View style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40/2,
                        backgroundColor: '#ff0000',
                        marginHorizontal: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Text 
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: '#FFF',
                        }}>G</Text>
                      </View>

                    
                    </View>
                    
                    <View style={{ marginTop: 30,flexDirection: 'row'}}>
                      <Text 
                        style={{
                          color: 'gray',
                        }}>Already have an account? </Text>
                      <Text
                      onPress={() => this.props.navigation.navigate('Login')}
                        style={{
                          fontWeight: 'bold',
                        }}> LOGIN </Text>
                    </View>
                  </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
});