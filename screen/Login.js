import * as React from 'react'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from 'react-native'

export default class Login extends React.Component {
    render() {
        return (
            <View style={ styles.container}>
                <Text style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  marginTop: 10,
                  color: '#0d47a1'
                }}> Login </Text>
                
                <Image 
                  style={{
                    width: "100%",
                    height: 230,
                  }}
                  source={require('../assets/login.jpg')}
                  resizeMode="contain"
                />

                <View>
                <TextInput 
                  style={{
                    width: 200,
                    marginTop: 10,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                  }}
                    placeholder= "Email"
                />

                <TextInput 
                  style={{
                    width: 200,
                    marginTop: 10,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                  }}
                    placeholder= "Password"
                />
                </View>

                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('ViewBooks')}
                    style={{
                      backgroundColor: '#0d47a1',
                      padding: 15,
                      width: 150,
                      borderRadius: 30,
                    }}>
                      <Text 
                      style={{
                        color: '#FFF',
                        fontSize: 16,
                        textAlign: 'center',
                      }}>Login </Text>
                    </TouchableOpacity>

                    <Text style={{
                      marginTop: 10,
                      textAlign: 'center',
                      textDecorationLine: 'underline',
                    }}>Forgot Password ?</Text>

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
                    
                    <View style={{ marginTop: 20,flexDirection: 'row'}}>
                      <Text 
                        style={{
                          color: 'gray',
                        }}>Don' t have an account? </Text>
                      <Text
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        style={{
                          fontWeight: 'bold',
                        }}> Sign up</Text>
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