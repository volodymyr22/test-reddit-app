import React from 'react';
import {FlatList, View} from 'react-native';
import {useReddit} from '../../hooks/useReddit';
import {RedditItem} from '../../components/RedditItem';
import {styles} from './styles';
export const HomePage = () => {
  const {reddits, loading} = useReddit();

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reddits}
        renderItem={({item}) => <RedditItem reddit={item} />}
      />
    </View>
  );
};
