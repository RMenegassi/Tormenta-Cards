import styled, {css} from 'styled-components';

export const View = styled.View`
  flex: 1;
`;
export const ButtonView = styled.View`
  flex-direction: column;
  justify-content: center;
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
  color: black;
  text-align: center;
  ${props =>
    props.marginRight &&
    css`
      margin: 20px ${props.marginRight}px;
    `};
`;
