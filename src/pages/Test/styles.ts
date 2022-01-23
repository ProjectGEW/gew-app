import styled from 'styled-components';
import { shade } from 'polished';

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

  h1 {
    font-size: 4vh;
    color: #00579D;
  }

  button {
    padding: 1vh;
    border: 0;
    border-radius: 0.5vh;
    margin-top: 0.5vh;
    margin-bottom: 0.5vh;

    font-size: 2vh;
    color: white;
    font-weight: bold;
    background-color: #00579D;

    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    &:hover {
      background-color: ${shade(0.09, "#00579D")}
    }
  }
`;