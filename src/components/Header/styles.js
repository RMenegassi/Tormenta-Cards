import styled from 'styled-components';

export const Title = styled.Text`
  align-self: center;
  margin: 0 0 0 0;
  font-size: 35px;
  font-weight: bold;
  color: #992120;
`;

export const SubTitle = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  color: #95a5a6;
  margin-bottom: 10px;
`;

export const HelpButton = styled.TouchableOpacity`
  border-radius: 500px;
  width: 20px;
  height: 20px;
  background-color: #2980b9;
  justify-content: center;
  align-items: center;
`;

export const HelpButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0 30px 0;
`;
