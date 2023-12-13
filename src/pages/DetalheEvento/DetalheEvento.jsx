import React, { Component, useState } from 'react';
import Container from '../../components/Container/Container';
import MainContent from '../../components/MainContent/MainContent';
import Title from '../../components/Title/Title';
import Table from './TableDE/TableDE';

const DetalheEvento = () => {

    const [comentario, setComentario] = useState([]);

    async function handleConnect(){
        
    }

    async function showHideModal(){

    }
    return (
        <MainContent>
            <section>
                <Container>
                    <Title
                        titleText="Eventos Passado"
                    />

                    <Table
                        dados={comentario}
                        fnConnect={handleConnect}
                        fnShowModal={showHideModal}
                    />
                </Container>
            </section>
        </MainContent>

    )

}

export default DetalheEvento;