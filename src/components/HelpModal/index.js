import React from 'react';
import {Image} from 'react-native';
import {View, CloseButton, CloseButtonText} from './styles';

const HelpModal = ({visible, callback}) => {
  if (visible) {
    return (
      <View>
        <CloseButton onPress={callback}>
          <CloseButtonText>X</CloseButtonText>
        </CloseButton>
        <Image
          style={{
            resizeMode: 'cover',
            width: '75%',
            height: '80%',
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: '#fff',
          }}
          source={require('../../assets/help.png')}
        />
      </View>
    );
  }
  return <></>;
};

export default HelpModal;
