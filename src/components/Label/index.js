import React from 'react';
import * as S from './styles';

export default function Label({ title, subtitle }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.TitleSpan>{subtitle}</S.TitleSpan>
    </S.Container>
  );
}
