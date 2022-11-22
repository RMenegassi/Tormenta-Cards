import React, {useState} from 'react';
import {
  View,
  Container,
  TouchableOpacity,
  Text,
  CardListView,
  ViewClassification,
  IconsView,
} from './styles';
import {Image, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import HelpModal from '../../components/HelpModal';
import CardModal from '../../components/CardModal';

import useCards from '../../Hooks/useCards';
import LevelSelect from '../../components/LevelSelect';

import images from '../../images';

import Icon from 'react-native-vector-icons/Ionicons';

export default function CardsPage({route, navigation}) {
  const {school, classCard} = route.params;

  const [visible, setVisible] = useState(false);
  const [visibleCard, setVisibleCard] = useState(false);
  const [image, setImage] = useState(require('../../assets/help.png'));
  const [allCards, changeFavorite, changeLearned] = useCards(classCard, school);

  const closeHelpModal = () => {
    setVisible(false);
  };

  const closeCardModal = () => {
    setVisibleCard(false);
  };

  const openHelpModal = () => {
    setVisible(true);
  };

  const filterCards = level => {
    const cardList = allCards
      .filter(card => {
        return card.level == level;
      })
      .map(item => {
        return (
          <CardListView key={item.index}>
            <TouchableOpacity
              onPress={() => {
                setImage(images[item.id]);
                setVisibleCard(true);
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  width: '100%',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <IconsView>
              <TouchableOpacity
                onPress={() => {
                  changeFavorite(item);
                }}>
                <Icon
                  name={item.isLearned ? 'star' : 'star-outline'}
                  size={20}
                  color={'#81060D'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  changeLearned(item);
                }}>
                <Icon
                  name={item.isLearned ? 'book' : 'book-outline'}
                  size={20}
                  color={'#81060D'}
                />
              </TouchableOpacity>
            </IconsView>
          </CardListView>
        );
      });

    return cardList;
  };

  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/background.png')}
      />

      <Header callback={openHelpModal} subtitle={'Selecione a magia'} />
      <CardModal
        visible={visibleCard}
        image={image}
        callback={closeCardModal}
      />
      <HelpModal visible={visible} callback={closeHelpModal} />

      <Container>
        <LevelSelect title="Level 1" filteredCards={filterCards('1')} />
        <LevelSelect title="Level 2" filteredCards={filterCards('2')} />
        <LevelSelect title="Level 3" filteredCards={filterCards('3')} />
        <LevelSelect title="Level 4" filteredCards={filterCards('4')} />
        <LevelSelect title="Level 5" filteredCards={filterCards('5')} />
      </Container>

      <ViewClassification>
        <Image style={styles.imageClassif} source={images[classCard]} />
      </ViewClassification>
      <ViewClassification school>
        <Image style={styles.imageSchool} source={images[school]} />
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
    position: 'absolute',
    left: 0,
    top: 0,
  },
  imageButton: {
    borderRadius: 500,
  },
  imageClassif: {
    borderRadius: 500,
    width: 60,
    height: 60,
  },
  imageSchool: {
    width: 30,
    height: 40,
  },
});
