import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const cardMargin = 10;
const cardsPerRow = 3;
const cardWidth = width / cardsPerRow - cardMargin * (1 + 1 / cardsPerRow);

export const bigNumberFontSize = (length: number) => cardWidth - 15 * length;

export default StyleSheet.create({
  container: {
    width,
    height: width * 1.5,
    marginLeft: cardMargin,
    marginTop: cardMargin,
    backgroundColor: '#EEE',
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
  },
  background: {
    flex: 1,
  },
  topNumber: {
    fontSize: cardWidth / 8,
    fontWeight: '700',
    color: '#333',
    marginLeft: cardMargin,
    marginTop: cardMargin,
  },
  bigNumberContainer: {
    position: 'absolute',
    height: '100%',
    width: cardWidth * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -cardWidth / 4,
  },
  bigNumber: {
    fontSize: cardWidth,
    color: '#999',
    fontWeight: '900',
  },
});
