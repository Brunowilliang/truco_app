import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px ${COLORS.LightBorderShadow};
  background-color: ${COLORS.LightSecondary};
  margin: 5px 0px;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${FONTS.open_bold};
  margin-right: 5px;
  color: ${COLORS.white};
`;

export const TitleSpan = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.white};
`;
