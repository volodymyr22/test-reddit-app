import axios from 'axios';
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

const App: FC = () => {
  axios
    .get('https://api.reddit.com/r/pics/hot.json')
    .then(response => {
      console.log(response.data.data.children);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() =>{
      // выполняется всегда
    });
  return <View></View>;
};

const styles = StyleSheet.create({});

export default App;
