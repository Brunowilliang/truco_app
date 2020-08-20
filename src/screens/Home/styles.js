import styled from 'styled-components/native';
import { COLORS, FONTS } from '~/constants';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.BackgroundLight};
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const ContainerCenter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  width: 50%;
  padding-right: 10px;
  align-items: center;
  border-right-width: 1px;
  border-color: ${COLORS.LightBorderShadow};
`;

export const Right = styled.View`
  display: flex;
  width: 50%;
  align-items: center;
  padding-left: 10px;
`;

export const ContainerFooter = styled.View`
  height: 120px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonIcon = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'android' ? 30 : 0}px;
  right: 20px;
  z-index: 1000;
`;
