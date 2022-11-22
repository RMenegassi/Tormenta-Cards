import React, {useState} from 'react';
import {
  View,
  ButtonViewSchool,
  ButtonSchool,
  ButtonText,
  ViewClassification,
} from './styles';
import {Image, Dimensions, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';

import images from '../../images';

export default function Schools({route, navigation}) {
  const [visible, setVisible] = useState(false);

  const closeHelpModal = () => {
    setVisible(false);
  };

  const openHelpModal = () => {
    setVisible(true);
  };

  const {classCard} = route.params;

  return (
    <View>
      <Header callback={openHelpModal} subtitle={'Selecione a escola'} />
      <HelpModal visible={visible} callback={closeHelpModal} />
      <Image
        style={styles.image}
        source={require('../../assets/background.png')}
      />

      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.28}px`}
        left={`${Dimensions.get('window').width / 2 - 110}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'abjuracao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/abjuracao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Abjuração</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.4}px`}
        left={`${Dimensions.get('window').width / 2 - 116}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'adivinhacao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/adivinhacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Adivinhação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.52}px`}
        left={`${Dimensions.get('window').width / 2 - 116}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'convocacao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/convocacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Convocação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.64}px`}
        left={`${Dimensions.get('window').width / 2 - 121}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'encantamento',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/encantamento.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Encantamento</ButtonText>
      </ButtonViewSchool>

      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.28}px`}
        right={`${Dimensions.get('window').width / 2 - 113}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'evocacao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/evocacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Evocação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.4}px`}
        right={`${Dimensions.get('window').width / 2 - 102}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'ilusao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/ilusao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Ilusão</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.52}px`}
        right={`${Dimensions.get('window').width / 2 - 125}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'necromancia',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/necromancia.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Necromancia</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.64}px`}
        right={`${Dimensions.get('window').width / 2 - 128}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {
              school: 'transmutacao',
              classCard,
            })
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/transmutacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Transmutação</ButtonText>
      </ButtonViewSchool>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  imageButton: {
    borderRadius: 500,
    width: 30,
    height: 40,
  },
  imageClassif: {
    borderRadius: 500,
    width: 80,
    height: 80,
  },
});
