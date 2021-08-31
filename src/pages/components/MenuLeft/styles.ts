import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
    from {
        transform: translateX(-10vw);
    } to {
        transform: translateX(0vw);
    }
`;
export const ContainerMenu = styled.div`
    width: 35vh;
    height: 80vh;
    margin-top: 14vh;
    margin-left: -11.5vw;
    background-color: #fff;
    border-radius: 0 2vh 2vh 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border: 0.1vh solid rgba(153, 153, 153, 0.40);
    position: fixed;
    display: flex;
    justify-content: space-between;
    cursor: default;
    z-index: 9;
    transition: all 0.3s;
    animation: ${appearFromLeft} 1.4s;

    &:after {
        content: "";
        width: 35vh;
        height: 75vh;
        margin-top: 2.5vh;
        margin-left: -0.30vw;
        position: absolute;
        border-right: 0.35vh solid #00579D;
    }
`;

export const ContainerInfo = styled.div`
    width: 32.5vh;
    height: 75vh;
    margin-top: 2.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    z-index: 999;

    #iconRef, #iconDel, #iconNews, #iconExit {
        color: #00579D;

        &:active {
            color: rgb(0, 87, 157, 0.8);
        }
    }
`;

export const UserImg = styled.div`
    width: 8vh;
    height: 8vh;
    border-radius: 1vh;
    margin-left: 12.5vw;
    border: 0.4vh solid #00579D;
    display: flex;
    justify-content: center;
    align-items: center;

    #iconUser {
        width: 3vw;
        height: 10vh;
    }

    p {
        width: 11vw;
        margin-left: 4.5vw;
        color: #00579D;
        font-size: 1.4vw;
        font-weight: bold;
        position: absolute;
        display: none;

        a {
            font-weight: 100;
            color: #00579D;
        }
    }
`;

export const NewsImg = styled.div`
    width: 10vh;
    height: 6vh;
    margin: -2vh 0 0 12.5vw;
    margin-bottom: 48vh;
    display: flex;
    justify-content: center;
    
    #news-img {
        cursor: pointer;
    }

    #iconNews {
        width: 3vw;
        height: 10vh;
    }

    p {
        margin-left: 1.8vw;
        color: #00579D;
        font-size: 1.2vw;
        font-weight: bold;
        position: absolute;
        display: none;
        transition: all 0.001s;
    }
`;

export const LineBlue = styled.div`
    content: "";
    width: 14vw;
    height: 0.1vh;
    margin: 19.75vh 0 0 1.2vw;
    position: absolute;
    background-color: #00579D;
    display: none;
`;

export const RefreshImg = styled.div`
    width: 1.2vw;
    height: 2.55vh;
    transform: translate(4vw, 16.5vh);
    position: absolute;
    display: none;
    transition: all 0.1s;

    #iconRef {
        width: 40px;
        height: 20px;
    }
`;

export const DeleteImg = styled.div`
    width: 1.2vw;
    height: 2.6vh;
    transform: translate(6vw, 16.5vh);
    position: absolute;
    display: none;
    transition: all 0.1s;

    #iconDel {
        width: 40px;
        height: 20px;
    }
`;

export const ContainerMsg = styled.div`
    width: 14vw;
    height: 22vw;
    margin-top: 11vw;
    margin-left: 1vw;
    position: absolute;
    display: none;
`;

export const Msg = styled.div`
    width: 14vw;
    height: 10vh;
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
`;

export const LineMsg = styled.div`
    width: 0.8vw;
    height: 10vh;
    background-color: #00579D;
    border-radius: 0px 0.6vh 0.6vh 0px;
`;

export const Aba = styled.div`
    width: 13.2vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleMsg = styled.div`
    width: 12vw;
    margin-left: 1.4vw;

    p {
        color: #00579D;
        font-weight: bold;
        font-size: 1vw;
        margin-top: 0.6vh;
    }
`;

export const TextMsg = styled.div`
    width: 12vw;
    margin-left: 1.4vw;
    transition: display 0.2s;

    p {
        color: #00579D;
        font-size: 1vw;
        margin-bottom: 1.4vh;
    }
`;

export const ExitImg = styled.div`
    width: 5vh;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12.5vw;
    cursor: pointer;
    transition: all 0.1s;

    #iconExit {
        width: 80px;
        height: 40px;
    }
`;

export const BtnOpen = styled.div`
    content: "";
    width: 2vh;
    height: 2vh;
    margin-top: 38.8vh;
    margin-left: 97%;
    position: absolute;
    background-color: white;
    border-radius: 0.1vh 0px 0.1vh 0px;
    border-top: 0.5vh solid #00579D; 
    border-right: 0.5vh solid #00579D; 
    transform: rotate(45deg);
    z-index: 90;
    cursor: pointer;
    transition: all 0.1s;
`;
