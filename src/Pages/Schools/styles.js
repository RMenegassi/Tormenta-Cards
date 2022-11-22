import styled, {css} from 'styled-components';

export const View = styled.View`
  flex: 1;
`;

export const ButtonViewSchool = styled.View`
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

export const ButtonSchool = styled.TouchableOpacity`
  border-radius: 300px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: black;
  text-align: center;
  ${props =>
    props.marginRight &&
    css`
      margin: 10px ${props.marginRight}px;
    `};
`;

export const ViewClassification = styled.View`
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
