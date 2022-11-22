import styled from 'styled-components';

export const View = styled.View`
  position: absolute;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000000bb;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: #bdc3c7;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin: 25px 45px -20px;
  z-index: 2;
`;
export const CloseButtonText = styled.Text``;
