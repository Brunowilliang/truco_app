import React, { useState, useEffect } from 'react';
import { Modal, Linking } from 'react-native';
import Button from '~/components/Button';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, FONTS } from '~/constants';
import * as S from './styles';

export default function ModalComponent(props) {
  function NewGame() {
    props.setVisibilityModal(false);
    props.setCount(0);
    props.setTeam('');
    props.setCount2(0);
    props.setTeam2('');
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.isVisibleModal}
        onRequestClose={() => {
          alert('O modal foi fechado.');
        }}
      >
        <S.ContainerModal>
          <S.ButtonIcon onPress={() => props.setVisibilityModal(false)}>
            <AntDesign name="close" size={25} color={COLORS.white} />
          </S.ButtonIcon>
          <S.ContainerTitle>
            <S.Title>Informações</S.Title>
            <S.TitleSpan>do jogo</S.TitleSpan>
          </S.ContainerTitle>
          <S.ContainerButtons>
            <Button onPress={NewGame} title="Começar um" subtitle="Novo Jogo" />
            <Button title="fazer uma" subtitle="doação" />
            <S.ContainerTitleFooter>
              <S.TitleFooter>Develop By</S.TitleFooter>
              <S.TitleSpanFooter
                onPress={() =>
                  Linking.openURL('https://www.linkedin.com/in/brunowilliang')
                }
              >
                Bruno Garcia
              </S.TitleSpanFooter>
            </S.ContainerTitleFooter>
          </S.ContainerButtons>
        </S.ContainerModal>
      </Modal>
    </>
  );
}
