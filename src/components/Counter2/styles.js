import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerHeader = styled.View`
  display: flex;
  width: 100%;
`;

export const TeamName = styled.Text`
  font-size: 15px;
  text-align: center;
  width: 100%;
  font-family: ${FONTS.bold};
  color: ${COLORS.LightSecondary};
  text-transform: uppercase;
`;

export const TeamNameInput = styled.TextInput.attrs({
  autoCompleteType: 'off',
  maxLength: 21,
  returnKeyType: 'send',
  placeholder: 'Digite o nome aqui',
  placeholderTextColor: `${COLORS.LightSecondary}`,
  numberOfLines: 2,
})`
  font-size: 15px;
  text-align: center;
  width: 100%;
  height: 30px;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.LightSecondary};
  text-transform: uppercase;
`;

export const Counter = styled.Text`
  /* margin-top: -20px; */
  font-size: 80px;
  text-align: center;
  font-family: ${FONTS.bold};
  color: ${COLORS.LightSecondary};
  text-transform: uppercase;
`;

export const ContainerFooter = styled.View`
  flex-direction: column;
`;

export const ContainerController = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;

export const ContainerButton = styled.View`
  width: 47%;
`;
