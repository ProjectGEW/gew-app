import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

`;

export const BoxDatas = styled.div`
    width: 100%;
    height: 57vh;
    margin-top: 10vh;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    span {
        width: 100%;
        height: 20vh;

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }

    div {
        width: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        label {
            width: 13vw;
            color: #00579D;
            font-size: 2.6vh;
            font-weight: bold;

            margin-bottom: 1vh;
            text-align: left;

            &:last-child {
                margin-right: 0vw;
            }
        }

        input {
            width: 12vw;
            height: 5vh;
            margin-bottom: 3vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }
    }
`;