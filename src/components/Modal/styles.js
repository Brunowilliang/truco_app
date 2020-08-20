import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  height: 400px;
  width: 100%;
  padding: 30px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${COLORS.LightPrimary};
  justify-content: space-between;
  opacity: 0.95;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ContainerButtons = styled.View``;

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

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const ContainerTitleFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const TitleFooter = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${FONTS.open_bold};
  margin-right: 5px;
  color: ${COLORS.white};
`;

export const TitleSpanFooter = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  font-family: ${FONTS.open_regular};
  color: ${COLORS.white};
`;
