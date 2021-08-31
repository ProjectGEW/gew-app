import styled, { css } from "styled-components";

interface HistoricPageProps {
    localDaRota?: string;
  }

export const ContainerMenuRight = styled.div<HistoricPageProps>`
    width: 30vw;
    height: 76vh;
    margin: 16vh 0 0 97.7vw;
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 8;

    #first { 
        border-radius: 0.5vh 0 0 0;
        background-color: #00579D;
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    }

    #second { 
        background: linear-gradient(to bottom, #00579D, #0075B1); 
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    }

    #three { 
        background-color: #0075B1;
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    }

    #four { 
        background: linear-gradient(to bottom, #0075B1, #0091BD); 
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    }

    #five { 
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    }

    #six { 
        border-radius: 0 0 0 0.5vh; 
        background: linear-gradient(to bottom, #0091BD, #009ecf); 
        &:hover {
            transform: translateX(-30vh);
            opacity: 0.9;
    
            &:before {
                display: none;
            }
    
            #icons {
                transform: scale(3.2, 3.2);
                margin-left: 5vh;
            }
        }
    } 

    a {
        transition: all 0.2s;
    }

    ${props => props.localDaRota === "/projects" && css`
        #first { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.05vh 0 0.05vh 0 rgba(50, 50, 93, 0.45);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

            &:hover {
                transform: translateX(-30vh);
                opacity: 1;
        
                &:before {
                    display: none;
                }
        
                #icons {
                    transform: scale(3.2, 3.2);
                    margin-left: 5vh;
                }
            }
        }
    `}

    ${props => props.localDaRota === "/register_projects" && css`
        #second { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.05vh 0 0.05vh 0 rgba(50, 50, 93, 0.45);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

            &:hover {
                transform: translateX(-30vh);
                opacity: 1;
        
                &:before {
                    display: none;
                }
        
                #icons {
                    transform: scale(3.2, 3.2);
                    margin-left: 5vh;
                }
            }
        }
    `}

    ${props => props.localDaRota === "/edit_projects" && css`
        #three { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.05vh 0 0.05vh 0 rgba(50, 50, 93, 0.45);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

            &:hover {
                transform: translateX(-30vh);
                opacity: 1;
        
                &:before {
                    display: none;
                }
        
                #icons {
                    transform: scale(3.2, 3.2);
                    margin-left: 5vh;
                }
            }
        }
    `}

    ${props => props.localDaRota === "/register_consultants" && css`
        #four { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.05vh 0 0.05vh 0 rgba(50, 50, 93, 0.45);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

            &:hover {
                transform: translateX(-30vh);
                opacity: 1;
        
                &:before {
                    display: none;
                }
        
                #icons {
                    transform: scale(3.2, 3.2);
                    margin-left: 5vh;
                }
            }
        }
    `}

    ${props => props.localDaRota === "/dashboard" && css`
        #six { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.05vh 0 0.05vh 0 rgba(50, 50, 93, 0.45);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

            &:hover {
                transform: translateX(-30vh);
                opacity: 1;
        
                &:before {
                    display: none;
                }
        
                #icons {
                    transform: scale(3.2, 3.2);
                    margin-left: 5vh;
                }
            }
        }
    `}
`;

export const ContIcons = styled.div`
    width: 100%;
    height: 12.3vh;
    margin-bottom: 0.4vh;
    background-color: #0091BD;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s;  
`;

export const Icon = styled.div`
    #icons {
        width: 3vh;
        height: 4vh;
        margin-left: 1.1vh;
    }
`;

export const TextMenuRight = styled.div`
    width: 8vw;
    margin-left: 1.5vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
        color: #fff;
        font-size: 2.5vh;
        font-weight: 600;
        margin-left: 3vw;
        font-family: Arial, Helvetica, sans-serif;
    }
`;