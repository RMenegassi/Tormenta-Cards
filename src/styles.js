import styled, {css} from 'styled-components';
import {Dimensions} from 'react-native';

export const View = styled.View`
  flex: 1;
  z-index: 0;
`;
export const ButtonView = styled.View`
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  height: 170px;
  width: 140px;
  position: absolute;
  ${props =>
    props.top &&
    css`
      top: ${props.top};
    `};
  ${props =>
    props.left &&
    css`
      left: ${props.left};
    `};
  ${props =>
    props.right &&
    css`
      right: ${props.right};
    `};
  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `};
`;

export const Button = styled.TouchableOpacity`
  border-radius: 500px;
  width: 100px;
  height: 100px;
`;

export const ButtonText = styled.Text`
  ${props =>
    props.marginRight &&
    css`
      margin: 20px ${props.marginRight}px;
    `};
`;

export const Title = styled.Text`
  position: absolute;
  top: ${Dimensions.get('window').height * 0.1}px;
  align-self: center;
  margin: 0 0 0 55px;
  font-size: 35px;
  font-weight: bold;
  color: #992120;
`;

export const SubTitle = styled.Text`
  position: absolute;
  top: ${Dimensions.get('window').height * 0.2}px;
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  color: #95a5a6;
`;

export const HelpButton = styled.TouchableOpacity`
  border-radius: 500px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${Dimensions.get('window').height * 0.07}px;
  right: 45px;
  background-color: #2980b9;
  justify-content: center;
  align-items: center;
`;

export const HelpButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const ButtonViewSchool = styled.View`
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  height: 60px;
  width: 60px;
  position: absolute;
  ${props =>
    props.top &&
    css`
      top: ${props.top};
    `};
  ${props =>
    props.left &&
    css`
      left: ${props.left};
    `};
  ${props =>
    props.right &&
    css`
      right: ${props.right};
    `};
  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `};
`;

export const ButtonSchool = styled.TouchableOpacity`
  border-radius: 500px;
  width: 30px;
  height: 30px;
`;

export const ViewClassification = styled.View`
  flex-direction: column;
  justify-content: center;
  z-index: 3;

  position: absolute;
  ${props =>
    props.top &&
    css`
      top: ${props.top};
    `};
  ${props =>
    props.left &&
    css`
      left: ${props.left};
    `};
  ${props =>
    props.right &&
    css`
      right: ${props.right};
    `};
  ${props =>
    props.bottom &&
    css`
      bottom: ${props.bottom};
    `};
`;
