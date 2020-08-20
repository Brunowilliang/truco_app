import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;


export const Title = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${FONTS.open_bold};
  margin-right: 5px;
  color: ${COLORS.LightPrimary};
`;

export const TitleSpan = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.LightPrimary};
`;
