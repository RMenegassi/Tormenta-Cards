import styled from 'styled-components';

export const View = styled.View`
  min-height: 100%;
  flex: 1;
  background-color: black;
`;

export const Container = styled.ScrollView`
  flex: 1;
  margin-bottom: 110px;
`;

export const Spacer = styled.View`
  height: 40%;
  background-color: transparent;
`;

export const CardListView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 0;
  border-bottom-width: 1px;
  border-color: #ccc;
  align-items: center;
`;

export const ViewClassification = styled.View`
  position: absolute;
  bottom: ${props => (props.school ? '6.5%' : '5%')};
  right: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Text = styled.Text`
  color: black;
`;

export const IconsView = styled.View`
  flex-direction: row;
`;
