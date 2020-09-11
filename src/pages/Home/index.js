import React, { useContext, useState } from 'react';
import { View, Text, Button } from 'react-native';

import Header  from '../../components/Header'
import HistoricoList from '../../components/HistoricoList'
import { AuthContext } from '../../contexts/auth'

import {Background, Container, Nome, Saldo, Title , List } from './styles'

export default function Home() {
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 200},
    {key: '2', tipo: 'despesa', valor: 100},
    {key: '3', tipo: 'receita', valor: 450},
    {key: '4', tipo: 'despesa', valor: 75},
    {key: '5', tipo: 'despesa', valor: 250}, 
  ])
  const { user } = useContext(AuthContext)

 return (
   <Background>
     <Header/>
     <Container>
       <Nome> {user && user.nome} </Nome>
       <Saldo>R$123,00</Saldo>
     </Container>
      <Title>Ultimas movimentações</Title>
      <List
      showsHorizontalScrollIndicator={false}
      data={historico}
      keyExtractor={ item => item.key}
      renderItem={ ({ item }) => ( <HistoricoList data={item}/>)}
      />
   </Background>
  );
}