import React, { useState, useEffect } from 'react';
import ButtonControl from '~/components/ButtonControl';
import * as S from './styles';

export default function Counter(props) {
  function increment() {
    props.setCount2(props.count2 + 1);
  }

  function increment3() {
    props.setCount2(props.count2 + 3);
  }

  function decrement() {
    props.setCount2(props.count2 - 1);
  }

  function decrement3() {
    props.setCount2(props.count2 - 3);
  }

  function reset() {
    props.setCount2(0);
  }

  useEffect(() => {
    finish2();
  }, [props.count2]);

  function finish2() {
    if (props.count2 >= 12) {
      props.setCount2(12);
      props.setOpenModalFinish2(true);
    }
    if (props.count2 < 0) {
      props.setCount2(0);
    }
    props.setResult2(props.count2);
  } console.log(props.count2)

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.TeamName>Equipe</S.TeamName>
        <S.TeamNameInput
          onChangeText={text => props.setTeam2(text)}
          value={props.team2}
        />
        <S.Counter>{props.result2}</S.Counter>
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
