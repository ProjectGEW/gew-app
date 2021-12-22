import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fff;

  div {
    padding: 2vh;
    border-radius: 0.8vh;
    background-image: linear-gradient(to right, #00579D, #0075B1, #0091BD, #009ecf);
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h1 {
      color: #fff;

      font-size: 5vh;
      text-transform: uppercase;
    }
  }
`;