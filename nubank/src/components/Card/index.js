import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  CardContent,
  CardHeader,
  CardFooter,
  CardMain,
  Content,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Card() {
  return (
    <Content>
      {/* <CardMain>
        <CardHeader>
          <Icon name="expand-more" size={24} color="#fff" />
          <Icon name="expand-more" size={24} color="#fff" />
        </CardHeader>
        <CardContent>
          <Title>Saldo disponível</Title>
          <Description>R$197.123.111,12</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$1.134.234.234,14 recebida de Paulo Guedes, hoje
            as 19:42h
          </Annotation>
        </CardFooter>
      </CardMain> */}
    </Content>
  );
}
