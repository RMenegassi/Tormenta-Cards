import React from 'react';
import {Image} from 'react-native';
import {View, CloseButton, CloseButtonText} from './styles';

const CardModal = ({visible, callback, image}) => {
  if (visible) {
    return (
      <View>
        <CloseButton onPress={callback}>
          <CloseButtonText>X</CloseButtonText>
        </CloseButton>
        <Image
          style={{
            resizeMode: 'contain',
            width: '75%',
            height: '65%',
            borderRadius: 20,
            overflow: 'hidden',
            borderWidth: 3,
            borderColor: '#fff',
          }}
          source={image}
        />
      </View>
    );
  }
  return <></>;
};

export default CardModal;
