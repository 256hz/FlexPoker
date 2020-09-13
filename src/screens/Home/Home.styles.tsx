import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#B60',
  },
  container: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 70,
  },
  bigCardContainer: {
    position: 'absolute',
    height,
    width,
    backgroundColor: '#AAAA',
    borderRadius: 20,
    borderColor: '#222',
  },
});
