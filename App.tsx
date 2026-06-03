import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { Button } from 'react-native/types_generated/index';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // console.log('đụ má mày')
    setCount((prev) => {
      return prev + 1
    })
  }



  return (
    <View style={styles.container}>
      <Text>Bạn mấy tuổi rồi: {count} chủi</Text>
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
});
