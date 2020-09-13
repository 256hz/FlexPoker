import React from 'react';
import { ScrollView, View } from 'react-native';
import useGlobal from '../../state';
import styles from './Home.styles';
import Card from '../../elements/Card/Card';

export default () => {
  const [{ cards }, actions] = useGlobal();
  console.log(cards);
  return (
    <View style={styles.scrollContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {cards.map(card => (
          <Card key={card.value} value={card.value} imageUrl={card.imageUrl} />
        ))}
      </ScrollView>
    </View>
  );
};
