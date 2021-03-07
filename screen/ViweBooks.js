import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function ViewBooks({ navigation }) {
  const [data, setData] = useState({
    tableHead: ["ISBN", "Author", "Publisher", "Price(LKR)"],
    tableData: [
      ["1", "Martin", "Sahan", "400"],
      ["2", "Kumarathunga", "Sahan", "500."],
      ["3", "Ajith", "Sahan", "500."],
      ["4", "Martin", "Sahan", "350."],
    ],
  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>

      <View 
        style={{
          flexDirection: 'row',
          marginTop: 30,
      }}
      >
      <TouchableOpacity 
        style={{
          backgroundColor: '#ff0000',
          marginHorizontal: 10,
          padding: 15,
          width: 150,
          borderRadius: 30,
        }}>
          <Text 
          style={{
            color: '#FFF',
            fontSize: 16,
            textAlign: 'center',
          }}>REMOVE</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('AddNewBook')}
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
          }}>ADD</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
})