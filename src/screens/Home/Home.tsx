import React, { useState } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import useGlobal from '../../state';
import styles from './Home.styles';
import Card from '../../elements/Card/Card';
import BigCard from '../../elements/BigCard/BigCard';

export default () => {
  const [{ cards, chosenCard }, { showCard }] = useGlobal();

  const [showBigCard, setShowBigCard] = useState(false);
  const [bigCardTop, setBigCardTop] = useState(0);
  // const [bigCardTop, setBigCardTop] = useState(Dimensions.get('screen').height);

  const showSelectedCard = (card: typeof Card) => {
    console.log(card);
    showCard(card);
    setShowBigCard(true);
    setBigCardTop(40);
    // while (bigCardTop > 40) {
    //   setTimeout(() => setBigCardTop(bigCardTop - 5), 10);
    // }
  };

  const hideBigCard = () => {
    setBigCardTop(Dimensions.get('screen').height);
    // while (bigCardTop < Dimensions.get('screen').height) {
    //   setTimeout(() => setBigCardTop(bigCardTop + 5), 10);
    // }
  };

  return (
    <View style={styles.scrollContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map(card => (
          <Card
            key={card.value}
            value={card.value}
            imageUrl={card.imageUrl}
            onPress={showSelectedCard}
          />
        ))}
      </ScrollView>
      <View
        style={{
          ...styles.bigCardContainer,
          top: bigCardTop,
        }}
      >
        <BigCard card={chosenCard} />
      </View>
    </View>
  );
};
