import React from 'react';
import {View} from 'react-native';

import {Title, SubTitle, HelpButton, HelpButtonText} from '../../styles';

const Header = ({callback, subtitle}) => {
  return (
    <View style={{zIndex: 14}}>
      <Title> TormentaCards </Title>
      <HelpButton onPress={callback}>
        <HelpButtonText>?</HelpButtonText>
      </HelpButton>
      <SubTitle>{subtitle}</SubTitle>
    </View>
  );
};

export default Header;
