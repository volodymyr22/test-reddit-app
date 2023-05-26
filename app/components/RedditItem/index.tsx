import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import moment from 'moment';

export const RedditItem = ({reddit}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {(reddit.data.thumbnail && reddit.data.thumbnail !== 'self') ? (
          <Image style={styles.image} source={{uri: reddit?.data?.thumbnail}} />
        ) : <View style={styles.noImage}></View>}
        <View style={{flexDirection: 'column', width: '60%'}}>
          <Text style={styles.title}>{reddit?.data?.title}</Text>
          <Text style={styles.author}>{reddit?.data?.author_fullname}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.score}>Score: {reddit?.data?.score}</Text>
          <Image
            style={{
              width: 20,
              height: 20,
              position: 'absolute',
              bottom: 0,
              right: -240,
            }}
            source={require('../../assets/chat-bubble.png')}
          />
        </View>
        <Text style={styles.creation}>
          Date: {moment(reddit?.data?.created_utc).format('ll')}
        </Text>
      </View>
    </View>
  );
};
