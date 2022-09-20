import React, {useState} from 'react';
import {
  View,
  ButtonViewSchool,
  ButtonSchool,
  ButtonText,
  ViewClassification,
} from '../../styles';
import {Image, Dimensions, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';

import images from '../../images';

export default function App({route, navigation}) {
  const [visible, setVisible] = useState(false);

  const closeHelpModal = () => {
    setVisible(false);
  };

  const openHelpModal = () => {
    setVisible(true);
  };

  const {name} = route.params;

  return (
    <View>
      <Header callback={openHelpModal} subtitle={'Selecione a escola'} />
      <HelpModal visible={visible} callback={closeHelpModal} />
      <Image
        style={styles.image}
        source={require('../../assets/background.png')}
      />

      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.3}px`}
        left={`${Dimensions.get('window').width / 2 - 100}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'abjuracao'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/abjuracao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-15">Abjuração</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.42}px`}
        left={`${Dimensions.get('window').width / 2 - 102}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'adivinhacao'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/adivinhacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-21">Adivinhação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.54}px`}
        left={`${Dimensions.get('window').width / 2 - 105}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'convocacao'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/convocacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-20">Convocação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.66}px`}
        left={`${Dimensions.get('window').width / 2 - 100}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'encantamento'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/encantamento.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-30">Encantamento</ButtonText>
      </ButtonViewSchool>

      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.3}px`}
        right={`${Dimensions.get('window').width / 2 - 115}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'evocacao'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/evocacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-10">Evocação</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.42}px`}
        right={`${Dimensions.get('window').width / 2 - 118}px`}>
        <ButtonSchool
          onPress={() => navigation.navigate('CardsPage', {school: 'ilusao'})}>
          <Image
            style={styles.imageButton}
            source={require('../../assets/ilusao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="0">Ilusão</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.54}px`}
        right={`${Dimensions.get('window').width / 2 - 115}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'necromancia'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/necromancia.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-25">Necromancia</ButtonText>
      </ButtonViewSchool>
      <ButtonViewSchool
        top={`${Dimensions.get('window').height * 0.66}px`}
        right={`${Dimensions.get('window').width / 2 - 115}px`}>
        <ButtonSchool
          onPress={() =>
            navigation.navigate('CardsPage', {school: 'transmutacao'})
          }>
          <Image
            style={styles.imageButton}
            source={require('../../assets/transmutacao.png')}
          />
        </ButtonSchool>
        <ButtonText marginRight="-25">Transmutação</ButtonText>
      </ButtonViewSchool>
      <ViewClassification
        top={`${Dimensions.get('window').height * 0.77}px`}
        right={`${Dimensions.get('window').width / 2 - 35}px`}>
        <Image style={styles.imageClassif} source={images[name]} />
      </ViewClassification>
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
