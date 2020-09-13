import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles, { bigNumberFontSize } from './Card.styles';
import { Card } from '../../state';

interface Props {
  value: number;
  imageUrl: string;
  onPress: Function;
}

export default ({ value, imageUrl, onPress }: Props) => {
  const valueString = (value === 0.5 ? '1/2' : value).toString();

  return (
    <Pressable onPress={() => onPress({ value, imageUrl })}>
      <View style={styles.container}>
        {/* <ImageBackground source={require(imageUrl)} style={styles.background} /> */}
        <Text style={styles.topNumber}>{valueString}</Text>
        <View style={styles.bigNumberContainer}>
          <Text
            style={{
              ...styles.bigNumber,
              fontSize: bigNumberFontSize(valueString.length),
            }}
          >
            {valueString}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
