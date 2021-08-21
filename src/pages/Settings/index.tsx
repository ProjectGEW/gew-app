import React from 'react';

import MenuLeft from '../components/MenuLeft';
import MenuRight from '../components/MenuRight';
import Navbar from '../components/Navbar';

import { FaEdit } from "react-icons/fa";

import { ContainerHome, Container, Left, Right } from './styles';

const Settings: React.FC = () => {

    /*const storage = localStorage.getItem('Animation');

      if(storage) {
        const verifica = JSON.parse(storage);
        alert(verifica);

        if(verifica == "true") {
            document.getElementById("animation")!.style.backgroundColor = "#00579D";
            document.getElementById("animation")!.style.transform = "rotate(180deg)";
        }
      } */

    // Revisão*****
    const activeButton = (x: String) => {
        if(x == "animation") {
            document.getElementById("animation")!.style.backgroundColor = "#00579D";
            document.getElementById("animation")!.style.transform = "rotate(180deg)";

            let animation = {animation: "true"}
            localStorage.setItem('Animation', JSON.stringify(animation));
            
        } else {
            document.getElementById("animation")!.style.backgroundColor = "#6B6B6B";
            document.getElementById("animation")!.style.transform = "rotate(0deg)";
        } 
    }

    return (
        <>
        <Navbar />
        <MenuLeft />
        <ContainerHome>                
            <Container>
                <h1><strong>Configurações</strong> Gerais</h1>
                <span />
            </Container>
            <Container>
                <Left>
                    <strong>Configurações de texto</strong>
                    <p>Tamanho da fonte</p>
                </Left>
                <Right>
                    <div>
                        <select name="font">
                            <option value="size1" selected>Padrão</option>
                            <option value="size2">14</option>
                            <option value="size3">20</option>
                            <option value="size4">26</option>
                        </select>
                    </div>
                </Right>
            </Container>
            <Container>
                <Left>
                    <strong>Configurações do dashboard</strong>
                    <p>Animações</p>
                </Left>
                <Right>
                    <div>
                        <span id="animation" onClick={() => activeButton("animation")} />
                    </div>
                </Right>
            </Container>
            <Container>
                <Left>
                    <strong>Configurações da conta</strong>
                    <p>Trocar nome de usuário</p>
                    <p>Alterar sua senha</p>
                    <p>Alterar foto de perfil</p>
                    <p>Desativar notificações</p>
                </Left>
                <Right>
                    <div>
                        <p>
                            <input type="text" placeholder="Renato Joaquim da Silva"/>
                            <FaEdit size={20}/>
                        </p>
                        <p>
                            <input type="password" placeholder="**************"/>
                            <FaEdit size={20}/>
                        </p>
                        <p>
                            <input type="text" placeholder="foto_perfil.png"/>
                            <FaEdit size={20}/>
                        </p>
                        <span id="notification" onClick={() => activeButton("not")} />
                    </div>
                </Right>
            </Container>
        </ContainerHome>
        <MenuRight />
        </>
    );
};

export default Settings;