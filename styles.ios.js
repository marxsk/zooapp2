import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5515f4',
    paddingTop: 70,
  },
  vcontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#5515f4',
    paddingTop: 24,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
  },
  slide2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 64,
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  ctext: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 8,
  }
})

module.exports = styles;
