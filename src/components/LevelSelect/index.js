import React, {useState} from 'react';

import {View, Container, CardView, ButtonIcon, Text} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const LevelSelect = ({title, filteredCards}) => {
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <View>
        <Text>{title}</Text>
        <ButtonIcon onPress={() => setOpened(!opened)}>
          <Icon
            name={opened ? 'chevron-up' : 'chevron-down'}
            size={15}
            color={'#000'}
          />
        </ButtonIcon>
      </View>
      {opened ? <CardView>{filteredCards}</CardView> : <></>}
    </Container>
  );
};

export default LevelSelect;
