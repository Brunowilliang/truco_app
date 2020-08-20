import React, { useState, useEffect } from 'react';
import { AdMobBanner, AdMobInterstitial } from 'expo-ads-admob';

import { Alert } from 'react-native';

import Label from '~/components/Label';
import Counter1 from '~/components/Counter1';
import Counter2 from '~/components/Counter2';

import ContainerPage from '~/components/ContainerPage';
import Modal from '~/components/Modal';
import ModalFinish1 from '~/components/ModalFinish1';
import ModalFinish2 from '~/components/ModalFinish2';

import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '~/constants';

import * as S from './styles';

export default function Home(props) {
  const [isVisibleModal, setVisibilityModal] = useState(false);
  const [openModalFinish1, setOpenModalFinish1] = useState(false);
  const [openModalFinish2, setOpenModalFinish2] = useState(false);

  const [team, setTeam] = useState('');
  const [team2, setTeam2] = useState('');

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [result, setResult] = useState(0);
  const [result2, setResult2] = useState(0);

  // useEffect(() => {
  //   async function LoadAd() {
  //     await AdMobInterstitial.setAdUnitID(
  //       'ca-app-pub-2739372552485367/1928950450'
  //     );
  //     InterstitialAD();
  //   }
  //   LoadAd();
  // }, []);

  // async function InterstitialAD() {
  //   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
  //   await AdMobInterstitial.showAdAsync();
  // }

  return (
    <>
      <Modal
        isVisibleModal={isVisibleModal}
        setVisibilityModal={setVisibilityModal}
        count={count}
        count2={count2}
        setCount={setCount}
        setCount2={setCount2}
        result={result}
        result2={result2}
        setResult={setResult}
        setResult2={setResult2}
        team={team}
        team2={team2}
        setTeam={setTeam}
        setTeam2={setTeam2}
      />
      <ModalFinish1
        openModalFinish1={openModalFinish1}
        setOpenModalFinish1={setOpenModalFinish1}
        count={count}
        count2={count2}
        setCount={setCount}
        setCount2={setCount2}
        result={result}
        result2={result2}
        setResult={setResult}
        setResult2={setResult2}
        team={team}
        team2={team2}
        setTeam={setTeam}
        setTeam2={setTeam2}
      />
      <ModalFinish2
        openModalFinish2={openModalFinish2}
        setOpenModalFinish2={setOpenModalFinish2}
        count={count}
        count2={count2}
        setCount={setCount}
        setCount2={setCount2}
        result={result}
        result2={result2}
        setResult={setResult}
        setResult2={setResult2}
        team={team}
        team2={team2}
        setTeam={setTeam}
        setTeam2={setTeam2}
      />
      <ContainerPage>
        <S.Container>
          <S.ButtonIcon onPress={() => setVisibilityModal(true)}>
            <Ionicons
              name="ios-settings"
              size={30}
              color={COLORS.LightPrimary}
            />
          </S.ButtonIcon>
          <S.ContainerTitle>
            <Label title="Contador" subtitle="De Truco" />
          </S.ContainerTitle>
          <S.ContainerCenter>
            <S.Left>
              <Counter1
                setOpenModalFinish1={setOpenModalFinish1}
                count={count}
                setCount={setCount}
                count2={count2}
                setCount2={setCount2}
                result={result}
                setResult={setResult}
                team={team}
                setTeam={setTeam}
              />
            </S.Left>
            <S.Right>
              <Counter2
                setOpenModalFinish2={setOpenModalFinish2}
                count2={count2}
                setCount2={setCount2}
                count={count}
                setCount={setCount}
                result2={result2}
                setResult2={setResult2}
                team2={team2}
                setTeam2={setTeam2}
              />
            </S.Right>
          </S.ContainerCenter>
          <S.ContainerFooter>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-2739372552485367/4424247707"
              setTestDeviceIDAsync
              servePersonalizedAds
              onDidFailToReceiveAdWithError={err => Alert(err)}
            />
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-2739372552485367/9101859311"
              setTestDeviceIDAsync
              servePersonalizedAds
              onDidFailToReceiveAdWithError={err => Alert(err)}
            />
          </S.ContainerFooter>
        </S.Container>
      </ContainerPage>
    </>
  );
}
