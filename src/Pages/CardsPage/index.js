import React, {useState} from 'react';
import {
  View,
  ButtonViewSchool,
  ButtonSchool,
  ButtonText,
  ViewClassification,
} from '../../styles';
import {
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import CardModal from '../../components/CardModal';

import {cards} from '../../assets/Cards/cards';

export default function App({route, navigation}) {
  const [visible, setVisible] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);
  const [image, setImage] = useState(require('../../assets/help.png'));

  const closeHelpModal = () => {
    setVisible(false);
  };

  const closeCardModal = () => {
    setVisibleCard(false);
  };

  const openHelpModal = () => {
    setVisible(true);
  };

  const {school} = route.params;
  const arrayCards = Object.entries(cards);

  const filterCards = level => {
    const listCards = arrayCards
      .filter(([card, value]) => {
        return (
          value.class === 'arcana' &&
          value.school === school &&
          value.level === level
        );
      })
      .map(([item, value]) => {
        console.log(value);
        return (
          <View style={{zIndex: 5, width: '100%', height: '100%'}}>
            <TouchableOpacity
              onPress={() => {
                setImage(value.image);
                setVisibleCard(true);
              }}>
              <Text>{value.title}</Text>
            </TouchableOpacity>
          </View>
        );
      });
    return listCards;
  };

  return (
    <View>
      <CardModal
        visible={visibleCard}
        image={image}
        callback={closeCardModal}
      />
      <Header callback={openHelpModal} subtitle={'Selecione a magia'} />
      <HelpModal visible={visible} callback={closeHelpModal} />
      {/*<Image
        style={styles.image}
        source={require('../../assets/background.png')}
  />*/}
      {filterCards('1')}
      {filterCards('5')}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    zIndex: -1,
  },
  imageButton: {
    borderRadius: 500,
  },
  imageClassif: {
    borderRadius: 500,
    width: 80,
    height: 80,
  },
});
