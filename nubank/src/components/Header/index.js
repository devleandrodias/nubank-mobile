import React from 'react';

import {Container, Top, Title, Logo} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Leandro</Title>
      </Top>
      <Icon name="expand-more" size={20} color="#fff" />
    </Container>
  );
}
