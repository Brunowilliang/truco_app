import React, { useState, useEffect } from 'react';
import ButtonControl from '~/components/ButtonControl';
import * as S from './styles';

export default function Counter(props) {
  function increment() {
    props.setCount(props.count + 1);
  }

  function increment3() {
    props.setCount(props.count + 3);
  }

  function decrement() {
    props.setCount(props.count - 1);
  }

  function decrement3() {
    props.setCount(props.count - 3);
  }

  function reset() {
    props.setCount(0);
  }

  useEffect(() => {
    finish();
  }, [props.count]);

  function finish() {
    if (props.count >= 12) {
      props.setCount(12);
      props.setOpenModalFinish1(true);
    }
    if (props.count < 0) {
      props.setCount(0);
    }
    props.setResult(props.count);
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.TeamName>Equipe</S.TeamName>
        <S.TeamNameInput
          onChangeText={text => props.setTeam(text)}
          value={props.team}
        />
        <S.Counter>{props.result}</S.Counter>
      </S.ContainerHeader>

      <S.ContainerFooter>
        <S.ContainerController>
          <S.ContainerButton>
            <ButtonControl title="+1" onPress={increment} />
          </S.ContainerButton>
          <S.ContainerButton>
            <ButtonControl title="+3" onPress={increment3} />
          </S.ContainerButton>
        </S.ContainerController>

        <S.ContainerController>
          <S.ContainerButton>
            <ButtonControl title="-1" onPress={decrement} />
          </S.ContainerButton>
          <S.ContainerButton>
            <ButtonControl title="-3" onPress={decrement3} />
          </S.ContainerButton>
        </S.ContainerController>
        <ButtonControl title="ZERAR" onPress={reset} />
      </S.ContainerFooter>
    </S.Container>
  );
}
