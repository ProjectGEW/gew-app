import styled, { css } from "styled-components";

interface Etapa {
    nome: any;
}

interface ErrorProps {
    localErro: any;
}

export const ContainerRegister = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;
`;

export const Info = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #00579D;

    box-shadow: 0.25vh 0.25vh 0.5vh rgb(0, 0, 0, 0.25);
    border-radius: 0.8vh 0.8vh 0 0;

    display: flex;
    align-items: center;

    h1 {
        color: white;
        margin-left: 1vw;
        font-size: 3.6vh;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 73vh;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 0vh 0vh 0.8vh 0.8vh;

    #boxProjeto {
        display: block;
    }

    #boxResponsavel {
        display: none;
    }

    #boxDinheiro {
        display: none;
    }

    #boxDatas {
        display: none;
    }
`;

export const Line = styled.div<Etapa>`
    width: 80%;
    height: 16vh;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
        content: '';
        width: 80%;
        height: 0.1vh;
        position: absolute;
        margin-top: 15vh;
        background-color: rgb(93, 93, 93, 0.2);
        display: none;
    }

    div {
        padding: 2vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;

        p {
            font-size: 2.6vh;
        }

        svg {
            width: 5vw;
            height: 6vh;

            color: #5D5D5D;

            &:hover {
                cursor: pointer;
            }
        }

        &:first-child {
            margin-left: 6vw;
        }

        &:last-child {
            margin-right: 6vw;

            &::after {
                display: none;
            }
        }

        &::after {
            content: '';
            height: 0.8vh;
            background: #5D5D5D;
            position: absolute;       

            margin-top: 3vh;
            margin-left: 14vw;
        }

        &:nth-child(1) {
            p {
                color: #00579D;
            }

            svg {
                width: 5vw;
                height: 6vh;

                color: #00579D;

                &:nth-child(2) {
                    display: none;
                }

                &:nth-child(4) {
                    display: none;
                }
            }

            &::after {
                width: 12vw;
                margin-left: 15vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(2) {
            p {
                color: #5D5D5D;
            }

            svg {
                color: #5D5D5D;

                &:nth-child(3) {
                    display: none;
                }

                &:nth-child(4) {
                    display: none;
                }
            }

            &::after {
                width: 12vw;
                margin-left: 15vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(3) {
            p {
                color: #5D5D5D;
            }

            svg {
                color: #5D5D5D;

                &:nth-child(3) {
                    display: none;
                }

                &:nth-child(4) {
                    display: none;
                }
            }

            &::after {
                width: 10.5vw;
                margin-left: 13.5vw;

                background: #5D5D5D;
            }
        }

        &:nth-child(4) {
            p {
                color: #5D5D5D;
            }

            svg {
                color: #5D5D5D;

                &:nth-child(3) {
                    display: none;
                }

                &:nth-child(4) {
                    display: none;
                }
            }
        }

        ${props => props.nome === "boxProjeto" && css`
            &:nth-child(1) {
                p {
                    color: #00579D;
                }

                svg {
                    width: 5vw;
                    height: 6vh;

                    color: #00579D;

                    &:nth-child(3) {
                        display: block;
                    }

                    &:nth-child(4) {
                        display: none;
                    }
                }

             
            }
        `}

        ${props => props.nome === "boxResponsavel" && css`
            &:nth-child(1) {
                p {
                    color: #00579D;
                }

                svg {
                    width: 5vw;
                    height: 6vh;

                    color: #00579D;

                    &:nth-child(4) {
                        display: block;
                    }

                    &:nth-child(3) {
                        display: none;
                    }
    
                    &:nth-child(2) {
                        display: none;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #00579D;
                }
            }

            &:nth-child(2) {
                p {
                    color #00579D;
                }

                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }

                    &:nth-child(3) {
                        display: block;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #5D5D5D;
                }
            } 
        `}

        ${props => props.nome === "boxDinheiro" && css`
            &:nth-child(1) {
                p {
                    color: #00579D;
                }

                svg {
                    width: 5vw;
                    height: 6vh;

                    color: #00579D;

                    &:nth-child(4) {
                        display: block;
                    }

                    &:nth-child(3) {
                        display: none;
                    }
    
                    &:nth-child(2) {
                        display: none;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #00579D;
                }
            }

            &:nth-child(2) {
                p {
                    color #00579D;
                }

                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }
                    
                    &:nth-child(4) {
                        display: block;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #00579D;
                }
            } 

            &:nth-child(3) {
                p {
                    color #00579D;
                }
    
                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }
                    
                    &:nth-child(3) {
                        display: block;
                    }
                }
    
                &::after {
                    width: 10.5vw;
                    margin-left: 13.5vw;
    
                    background: #5D5D5D;
                }
            }
        `}

        ${props => props.nome === "boxDatas" && css`
            &:nth-child(1) {
                p {
                    color: #00579D;
                }

                svg {
                    width: 5vw;
                    height: 6vh;

                    color: #00579D;

                    &:nth-child(4) {
                        display: block;
                    }

                    &:nth-child(3) {
                        display: none;
                    }
    
                    &:nth-child(2) {
                        display: none;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #00579D;
                }
            }

            &:nth-child(2) {
                p {
                    color #00579D;
                }

                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }
                    
                    &:nth-child(4) {
                        display: block;
                    }
                }

                &::after {
                    width: 12vw;
                    margin-left: 15vw;

                    background: #00579D;
                }
            } 

            &:nth-child(3) {
                p {
                    color #00579D;
                }
    
                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }
                    
                    &:nth-child(4) {
                        display: block;
                    }
                }
    
                &::after {
                    width: 10.5vw;
                    margin-left: 13.5vw;
    
                    background: #00579D;
                }
            }

            &:nth-child(4) {
                p {
                    color #00579D;
                }
    
                svg {
                    color: #00579D;

                    &:nth-child(2) {
                        display: none;
                    }
                    
                    &:nth-child(3) {
                        display: block;
                    }
                }
            }
        `}
    }
`;

export const Error = styled.span<ErrorProps>`
  color: #c53030;
  margin-top: 1vh;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;

  ${props => props.localErro === 'inicio' && css`
    margin-left: -18.2vw;
  `}

  ${props => props.localErro === 'aprovacao' && css`
    margin-left: 12.5vw;
  `}

  ${props => props.localErro === 'fim' && css`
    margin-left: -2.7vw;
  `}

  display: none;
`;

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
    border-radius: 0.8vh;

    input {
        color: #424242;
        &::placeholder {
            color: #8f8f8f;
        }
    }
`;