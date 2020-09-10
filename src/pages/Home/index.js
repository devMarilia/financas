import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import Header  from '../../components/Header'
import { AuthContext } from '../../contexts/auth';
import {Background, Container, Nome, Saldo, Title } from './styles'
export default function Home() {

  const { user } = useContext(AuthContext);

 return (
   <Background>
     <Header/>
     <Container>
       <Nome>Marilia</Nome>
       <Saldo>R$123,00</Saldo>
     </Container>
      <Title>Ultimas movimentações</Title>
   </Background>
  );
}