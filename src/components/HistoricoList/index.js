import React from 'react';

import Icon from 'react-native-vector-icons/Feather'

import { Container, Tipo, TipoText, IconView , ValorText } from './styles'

export default function HistoricoList({ data }) {
 return (
    <Container tipo={data.tipo}>
        <Tipo>
            <IconView  tipo={data.tipo}>
                <Icon 
                name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
                color="#FFF" 
                size={20} />
                <TipoText>{data.tipo}</TipoText>
            </IconView>
        </Tipo>
        <ValorText>
            R$ {data.valor}
        </ValorText>
    </Container>
  )
}