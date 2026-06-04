import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

// import { Button } from 'react-native/types_generated/index';

export default function App() {

  const [students, setStudents] = useState([
    { id: 1, name: 'nguyen duc huy1', age: 10 },
    { id: 2, name: 'nguyen duc huy4', age: 10 },
    { id: 3, name: 'nguyen duc huy2', age: 10 },
    { id: 4, name: 'nguyen duc huy7', age: 10 },
    { id: 5, name: 'nguyen duc huy3', age: 10 },
    { id: 6, name: 'nguyen duc huy6', age: 10 },
    { id: 7, name: 'nguyen duc huy8', age: 10 },
    { id: 8, name: 'nguyen duc huy9', age: 10 },
    { id: 9, name: 'nguyen duc huy5', age: 10 },
    { id: 10, name: 'nguyen duc huy5', age: 10 },
    { id: 11, name: 'nguyen duc huy5', age: 10 },
    { id: 12, name: 'nguyen duc huy5', age: 10 },
    { id: 13, name: 'nguyen duc huy5', age: 10 },
    { id: 14, name: 'nguyen duc huy5', age: 10 },
    { id: 15, name: 'nguyen duc huy5', age: 10 },
  ]);


  return (
    <View style={styles.container}  >
      <Text style={{ color: 'red', fontWeight: 900 }}>NGUYỄN ĐỨC HUY</Text>
      <View style={{ flex: 1 }}  >
        <DataTable style={styles.tableHeader} >
          <DataTable.Header >
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Tên Sinh Viên</DataTable.Title>
            <DataTable.Title>Tuổi</DataTable.Title>
          </DataTable.Header>
        </DataTable>
        <FlatList
          data={students}
          keyExtractor={(item) => item.id.toString()}
          // style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <DataTable>
                <DataTable.Row  >
                  <DataTable.Cell>{item.id}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.age}</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  //   container: {
  //   padding: 15,
  // },
  tableHeader: {
    backgroundColor: '#DCDCDC',
    // flex: 1
  },
});
