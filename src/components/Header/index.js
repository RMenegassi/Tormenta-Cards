import React from 'react';
import {View} from 'react-native';

import {
  Title,
  SubTitle,
  HelpButton,
  HelpButtonText,
  TitleContainer,
} from './styles';

const Header = ({callback, subtitle}) => {
  return (
    <View>
      <TitleContainer>
        <Title> TormentaCards </Title>
        <HelpButton onPress={callback}>
          <HelpButtonText>?</HelpButtonText>
        </HelpButton>
      </TitleContainer>
      <SubTitle>{subtitle}</SubTitle>
    </View>
  );
};

export default Header;
