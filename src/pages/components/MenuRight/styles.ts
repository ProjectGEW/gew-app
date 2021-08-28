import styled, { css } from "styled-components";

/*interface TypeRoute {
    type?: 'Dashboard' | 'EditProjects' | 'RegisterConsultants' | 'RegisterProjects' | 'Projects';
}*/

/*const styleTypes = {
    Dashboard: css `
        &:nth-child(6) {
            margin-left: -0.7vw;

            #icons {
                margin-left: 1.1vw;
            }
            
            &:before {
                content: "";
                width: 0.1vw;
                height: 10vh;
                margin-left: 0.8vw;
                background: #fff;
                position: absolute;
            }
        }
    `,
    EditProjects: css `
        &:nth-child(3) {
            margin-left: -0.7vw;

            #icons {
                margin-left: 1.1vw;
            }
            
            &:before {
                content: "";
                width: 0.1vw;
                height: 10vh;
                margin-left: 0.8vw;
                background: #fff;
                position: absolute;
            }
        }
    `,
    RegisterConsultants: css `
        &:nth-child(4) {
            margin-left: -0.7vw;

            #icons {
                margin-left: 1.1vw;
            }
            
            &:before {
                content: "";
                width: 0.1vw;
                height: 10vh;
                margin-left: 0.8vw;
                background: #fff;
                position: absolute;
            }
        }
    `,
    RegisterProjects: css `
        &:nth-child(2) {
            margin-left: -0.7vw;

            #icons {
                margin-left: 1.1vw;
            }
            
            &:before {
                content: "";
                width: 0.1vw;
                height: 10vh;
                margin-left: 0.8vw;
                background: #fff;
                position: absolute;
            }
        }    
    `,
    Projects: css `
        &:nth-child(1) {
            margin-left: -0.7vw;

            #icons {
                margin-left: 1.1vw;
            }
            
            &:before {
                content: "";
                width: 0.1vw;
                height: 10vh;
                margin-left: 0.8vw;
                background: #fff;
                position: absolute;
            }
        }    
    `,
};*/

interface HistoricPageProps {
    localDaRota?: string;
  }

export const ContainerMenuRight = styled.div`
    width: 30vw;
    height: 76vh;
    margin: 9vh 0 0 97.7vw;
    display: flex;
    flex-direction: column;
    position: fixed;
`;

export const ContIcons = styled.div<HistoricPageProps>`
    width: 100%;
    height: 12.3vh;
    margin-bottom: 0.4vh;
    background-color: #0091BD;
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s;

    &:nth-child(1) { background-color: #00579D; }

    &:nth-child(2) { background: linear-gradient(to bottom, #00579D, #0075B1); }

    &:nth-child(3) { background-color: #0075B1; }

    &:nth-child(4) { background: linear-gradient(to bottom, #0075B1, #0091BD); }

    &:nth-child(1) { border-radius: 0.5vh 0 0 0; }

    &:nth-child(6) { 
        border-radius: 0 0 0 0.5vh; 
        background: linear-gradient(to bottom, #0091BD, #009ecf); 
    }

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

    ${props => props.localDaRota === "projects" && css`
        &:nth-child(1) { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.1vh 0 0.1vh 0 rgba(50, 50, 93, 0.25);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

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
    `}

    ${props => props.localDaRota === "register_projects" && css`
        &:nth-child(2) { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.1vh 0 0.1vh 0 rgba(50, 50, 93, 0.25);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

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
    `}

    ${props => props.localDaRota === "edit_projects" && css`
        &:nth-child(3) { 
            transform: translateX(-3vh);
            border-left: 1vh solid white;
            box-shadow: -0.1vh 0 0.1vh 0 rgba(50, 50, 93, 0.25);

            #icons {
                transform: scale(1.6, 1.6);
                margin-left: 2vh;
            }

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
    `}
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

    a {
        color: #fff;
        font-size: 2.5vh;
        font-weight: 600;
        margin-left: 3vw;
        font-family: Arial, Helvetica, sans-serif;
    }
`;