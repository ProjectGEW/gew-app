import styled from "styled-components";

import Plus from '../../../../assets/plus.svg';

export const BoxDinheiro = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        div {
            &:nth-child(1) {
                div {
                    &:nth-child(2) {
                        div {
                            &:last-child {
                                justify-content: flex-end;

                                h2 {
                                    margin-right: 1.3vw;
                                }

                                #totalEsforco {
                                    width: 6.2vw;
                                    margin-right: 0.7vw;
                                }

                                #totalValor {
                                    width: 10vw;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const Table = styled.div`
    width: 50vw;
    margin-bottom: 4vh;

    svg {
        float: right;
        margin-top: -1.2vw;
        margin-right: -0.8vw;
        width: 3vw;
        height: 3vh;
        color: #00579D;
        
        &:hover {
            color: #0075B1;
        }
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    overflow: hidden;

    background-color: #fff;
    border-radius: 0.8vh;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    input {
        font-size: 2.2vh;
    }

    .alinhar {
        text-align: center;
    }

    #first-table, #second-table {
        background-color: #00579D;
    }

    #first-scroll, #second-scroll {
        max-height: 18vh;

        flex-direction: column;
        overflow: scroll;
        overflow-x: hidden;

        ::-webkit-scrollbar {
            background-color: rgb(196, 196, 196, 0.5);
            width: 0.5vw;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: rgb(196, 196, 196); 
            border-radius: 1vh;
        }
    }

    #first-table {
        h1 {
            margin-right: 3vw;

            &:nth-child(1) {
                margin-left: 8vw;
            }

            &:nth-child(2) {
                margin-left: 4vw;
            }

            &:nth-child(3) {
                margin-left: 0vw;
                margin-right: 3vw;
            }
        }
    }

    div {
        width: 100%;
        padding: 1.5vh;

        display: flex;
        justify-content: space-between;
        flex-direction: row;

        h1 {
            color: white;
            font-size: 2.6vh;
            margin-left: 4.4vw;
            margin-right: 3vw;
        }
    }

    &:nth-child(2) {
        div {
            h1 {
                margin-right: 3vw;
                
                &:nth-child(1) {
                    margin-left: 1.8vw;
                }

                &:nth-child(2) {
                    margin-left: 2.8vw;
                }

                &:nth-child(3) {
                    margin-left: 1.6vw;
                }

                &:nth-child(4) {
                    margin-left: 0vw;
                }
            }

            &:last-child {
                input {
                    &:nth-child(1) {
                        width: 12vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(2) {
                        width: 16vw;
                        margin-left: 0vw;
                    }
            
                    &:nth-child(3) {
                        width: 6vw;
                        margin-right: 0vw;
                    }
    
                    &:nth-child(4) {
                        width: 10vw;
                        margin-right: 0vw;
                    }
                }
            }
        }
    }
`;

export const Linha = styled.div`
    width: 100%;
    transition: all 0.2s;

    input {
        height: 5vh;

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;

        &:nth-child(1) {
            width: 29vw;
        }

        &:nth-child(2) {
            width: 6vw;
        }

        &:nth-child(3) {
            width: 10vw;
        }
    }

    /*&::before {
        content: '';
        width: 1.2vw;
        height: 3vh;
        position: absolute;
        
        margin-top: 1vh;
        margin-left: 50vw;

        background-image: url(${Plus});
        background-size: cover;
        background-position: center;
        cursor: pointer;
    }*/
`;

export const Total = styled.div`
    width: 80%;
   
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: #00579D;
        font-size: 2.6vh;
    }

    input {
        height: 5vh;

        &:nth-child(1) {
            width: 8vw;
        }

        &:nth-child(2) {
            width: 12vw;
        }

        &:first-child {
            margin-left: 25.5vw;
        }

        border-radius: 0.4vh;
        border: 0px;
        padding: 1vh;

        background-color: rgb(181, 181, 181, 0.6);
        box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
        color: #5E5E5E;
    }  
`;