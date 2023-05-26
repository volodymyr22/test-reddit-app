import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    marginVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: 'relative',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: '35%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  noImage:{
    textAlign: 'center',
    width: '35%',
    aspectRatio: 1,
    backgroundColor: 'lightgrey',
    color: 'white',
    fontWeight: '600',
    flexDirection: 'row',
    lineHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderRadius: 8,
  },
  author: {
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'right',
    marginTop: 5,
    color: 'gray'
  },
  info: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  score: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  creation: {
    fontSize: 12,
    fontWeight: '500',
  },
});
