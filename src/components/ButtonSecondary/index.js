import React from 'react';
import * as S from './styles';

export default function Button({ onPress, title, subtitle }) {
  return (
    <S.Button onPress={onPress}>
      <S.Title>{title}</S.Title>
      <S.TitleSpan>{subtitle}</S.TitleSpan>
    </S.Button>
  );
}
