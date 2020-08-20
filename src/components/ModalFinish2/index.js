import React, { useState, useEffect } from 'react';
import { AdMobInterstitial } from 'expo-ads-admob';
import { Modal, Linking } from 'react-native';
import ButtonSecondary from '~/components/ButtonSecondary';
import LottieView from 'lottie-react-native';
import * as S from './styles';

export default function ModalFinish(props) {
  function NewGame() {
    props.setOpenModalFinish2(false);
    props.setCount(0);
    props.setTeam('');
    props.setCount2(0);
    props.setTeam2('');
  }

  function ContinueGame() {
    props.setOpenModalFinish2(false);
    props.setCount(0);
    props.setCount2(0);
  }

  // useEffect(() => {
  //   async function LoadAd() {
  //     await AdMobInterstitial.setAdUnitID(
  //       'ca-app-pub-2739372552485367/1928950450'
  //     );
  //     InterstitialAD();
  //     LoadAd();
  //   }
  // }, []);

  // async function InterstitialAD() {
  //   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  //   await AdMobInterstitial.showAdAsync();
  // }

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.openModalFinish2}
        onRequestClose={() => {
          alert('O modal foi fechado.');
        }}
      >
        <S.ContainerModal>
          <LottieView
            autoPlay
            resizeMode="contain"
            loop={true}
            style={{
              position: 'absolute',
            }}
            source={require('~/assets/confetti.json')}
          />
          <S.ContainerTitle>
            <S.Title>parabéns</S.Title>
            <S.TitleSpan>{props.team2}</S.TitleSpan>
            <S.Title>Vocês Ganharam</S.Title>
          </S.ContainerTitle>
          <LottieView
            autoPlay
            resizeMode="cover"
            loop={false}
            style={{
              // position: 'absolute',
              // top: 40,
              height: 400,
            }}
            source={require('~/assets/trophy.json')}
          />
          <S.ContainerButtons>
            <ButtonSecondary
              onPress={ContinueGame}
              title="Continuar"
              subtitle="Jogo"
            />
            <ButtonSecondary
              onPress={NewGame}
              title="Começar um"
              subtitle="Novo Jogo"
            />
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
