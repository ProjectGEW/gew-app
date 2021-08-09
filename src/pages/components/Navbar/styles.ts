import styled from "styled-components";

export const ContainerNavbar = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
`;

export const Logo = styled.div`
    width: 4.2vw;
    height: 6vh;
    margin: 1vh 0 0 1vw;
    background-image: url("https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand.svg");
    float: left;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;

export const PageIndicator = styled.div`
    width: 10vw;
    height: 8vh;
    margin-left: 3vw;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    a { 
        font-size: 2.3vh;
        font-weight: bold;
        color: #00579D;
        position: absolute;
    }

    &:after {
        content: "";
        width: 90%;
        height: 0.75vh;
        margin: 7.25vh 0 0 5%;
        background: #00579D;
        border-radius: 1vh 1vh 0 0;
    }
`;

export const SandwichMenu = styled.div`
    width: 2vw;
    height: 4vh;
    margin: 2.5vh 2vw 0 1vw;
    float: right;
    background-image: linear-gradient( to bottom, #00579D 20%, #FFF 20%, #FFF 40%, #00579D 40%, #00579D 60%, #FFF 60%, #FFF 80%, #00579D 80%);

    &:hover {
        cursor: pointer;
    }
`;

export const DropdownMenu = styled.div`
    width: 10vw;
    height: 21vh;
    background: #fff;
    box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
    border-radius: 2px;
    position: absolute;
    margin-top: 5.55vh;
    transform: translateX(-6.5vw);
    display: none;
    z-index: 10;

    ul { 
        width: 100%;
        height: 21vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        li {
            width: 100%;
            height: 7vh;
            color: #00579D;
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background: rgb(200, 200, 200, 0.2);
            }

            &:active {
                background: #00579D;
                
                a {
                    color: #fff;
                }
            }

            a {
                color: #005DA5;
                font-size: 2.6vh;

                &:hover {
                    cursor: pointer;
                }
                
            }

            &:after {
                content: "";
                width: 80%;
                height: 0.1vh;
                margin: 7vh 0 0 5%;
                position: absolute;
                background: rgb(200, 200, 200, 0.6);
            }
        }

        li:last-child:after {
            display: none;
        }
    }
`;

export const LanguageIndicator = styled.div`
    width: 4vw;
    height: 6vh;
    margin: 1.5vh 1vw 1vh 0;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Flag = styled.div`
    width: 2vw;
    height: 3vh;
    border-radius: 0.1vh;
    background-image: url(../img/flag.svg);
    background-size: cover;
    background-position: center;
`;

export const VectorLanguage = styled.div`
    width: 1.4vw;
    height: 2vh;
    margin-left: 0.25vw;
    background-image: url(../img/arrow.svg);
    background-size: cover;
    background-position: center;
    transform: scale(0.65, 0.65);
    cursor: pointer;
`;