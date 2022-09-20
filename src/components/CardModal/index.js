import React from 'react';
import {Image} from 'react-native';
import styled from 'styled-components';

const View = styled.View`
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 15;
  background-color: #000000bb;
`;

const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #bdc3c7;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 25px 45px -20px;
  z-index: 16;
`;
const CloseButtonText = styled.Text``;

const CardModal = ({visible, callback, image}) => {
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
          source={image}
        />
      </View>
    );
  }
  return <></>;
};

export default CardModal;
