import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 33.5vw;
    width: 32vw;
    height: 80vh;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.8vh;

    header {
        width: 100%;
        height: 8vh;
        background-color: #00579D;
        border-radius: 1vh 1vh 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3vh 0 3vh;

        h1 {
            font-size: 3.7vh;s
            font-weight: bold;
            color: #fff;
        }

        svg {
            width: 3.6vh;
            height: auto;
            color: #fff;
            margin-top: 0.4vh;
        }
    }
`;

export const InputGrid = styled.div`
    width: 80%;
    height: 70vh;
    margin: 10% 5vh;

    display: flex;
    flex-direction: column;
`;

export const Box = styled.ul`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: row;

    li {

        .one {
            label {
                color: red;
            }
        }

        display: flex;
        flex-direction: column;
        list-style: none; 

        label {
            color: #00579D;
        }
    }
    
`;