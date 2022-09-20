import React, {useState} from 'react';
import {View, ButtonView, Button, ButtonText} from '../../styles';
import {Image, Dimensions, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';

export default function App({navigation}) {
  const [visible, setVisible] = useState(false);

  const closeHelpModal = () => {
    setVisible(false);
  };

  const openHelpModal = () => {
    setVisible(true);
  };

  return (
    <View>
      <Header callback={openHelpModal} subtitle={'Selecione a classificação'} />
      <HelpModal visible={visible} callback={closeHelpModal} />
      <Image
        style={styles.image}
        source={require('../../assets/background.png')}
      />

      <ButtonView
        top={`${Dimensions.get('window').height * 0.3}px`}
        left="50px">
        <Button
          onPress={() => navigation.navigate('Schools', {name: 'arcana'})}>
          <Image
            style={styles.imageButton}
            source={require('../../assets/arcana.png')}
          />
        </Button>
        <ButtonText marginRight="45">Arcana</ButtonText>
      </ButtonView>
      <ButtonView
        top={`${Dimensions.get('window').height * 0.3}px`}
        right="50px">
        <Button
          onPress={() => navigation.navigate('Schools', {name: 'divina'})}>
          <Image
            style={styles.imageButton}
            source={require('../../assets/divina.png')}
          />
        </Button>
        <ButtonText marginRight="45">Divina</ButtonText>
      </ButtonView>
      <ButtonView
        top={`${Dimensions.get('window').height * 0.55}px`}
        left={`${Dimensions.get('window').width / 2 - 65}px`}>
        <Button
          onPress={() => navigation.navigate('Schools', {name: 'universal'})}>
          <Image
            style={styles.imageButton}
            source={require('../../assets/universal.png')}
          />
        </Button>
        <ButtonText marginRight="40">Universal</ButtonText>
      </ButtonView>
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
});
