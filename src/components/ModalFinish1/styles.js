import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const ContainerModal = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 30px 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.white};
  opacity: 0.95;
`;

export const ContainerTitle = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  top: 50px;
  width: 100%;
  z-index: 1000;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  z-index: 1000;
`;

export const Title = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-family: ${FONTS.open_bold};
  margin-right: 5px;
  color: ${COLORS.LightSecondary};
`;

export const TitleSpan = styled.Text`
  font-size: 25px;
  text-transform: uppercase;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.LightSecondary};
  margin: 5px 0px;
`;

export const ContainerTitleFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TitleFooter = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${FONTS.open_bold};
  margin-right: 5px;
  color: ${COLORS.LightSecondary};
`;

export const TitleSpanFooter = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.LightSecondary};
`;
