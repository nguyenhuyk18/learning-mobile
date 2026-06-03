import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { Button } from 'react-native/types_generated/index';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const handleClick = () => {
    setCount((prev) => {
      return prev + 1
    })
  }



  return (
    <View style={styles.container}>
      <View>

        <Text>
          Name: {name}
        </Text>
        <TextInput
          // multiline={true}
          onChangeText={(value) => {
            setName(value)
          }}

          style={{
            borderColor: 'green',
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 10,
            fontWeight: 900
          }} />
      </View>

      <View>

        <Text>
          Age: {age}
        </Text>
        <TextInput
          // multiline={true}
          onChangeText={(value) => {
            setAge(+value)
          }}
          keyboardType="numeric"
          // value={age}
          style={{
            borderColor: 'green',
            borderWidth: 1,
            width: 200,
            padding: 5,
            borderRadius: 10,
            fontWeight: 900
          }}
          maxLength={2}
        />


      </View>

      <Text style={styles.hello2}>NGUYỄN ĐỨC HUY</Text>
      <Text style={styles.hello1} >Bạn mấy tuổi rồi: {count} chủi</Text>
      <StatusBar style="auto" />
      {/* <Button></Button> */}
      <Button title='Bấm Vào Đây'
        onPress={handleClick}
      />
      <Button title='Reset'
        onPress={() => {
          setCount(() => {
            return 0
          })
        }}
        color={'red'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hello2: {
    color: 'pink',
    fontSize: 15,
    fontWeight: 900
  },

  hello1: {
    color: 'red', fontSize: 30, borderColor: "green", borderWidth: 4, padding: 12
  }
});
