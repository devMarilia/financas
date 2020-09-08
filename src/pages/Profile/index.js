import React from 'react';

import {  Container, Nome, NewLink, NewText, Logout, LogoutText } from './styles';

export default function Profile(){
    return(
        <Container>
            <Nome>
                Marilia
            </Nome>
            <NewLink>
                <NewText>Registrar Gastos</NewText>
            </NewLink>

            <Logout>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    )
}
