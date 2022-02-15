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

  .load {
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
}

.load h1 {
    /* width: 30%;
    height: 200px;
    background-image: url('../img/gew.png');
    background-position: center;
    background-size: cover; */

    font-family: Helvetica;
    font-size: 20vh;
    color: #00579D;
    font-weight: 550;

    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
}

.load h1:before, h1:after {
    content: '';
    width: 25vw;
    height: 3vh;

    border-radius: 0.4vh;
    background: linear-gradient(to right, #00579D, #0075B1, #0091BD, #009ecf, #00579D);
    position: absolute;
    background-size: 400%;
    animation: animate 10s linear infinite;
}

.load h1::before {
	filter: blur(10px);
}

@keyframes animate {
	0% {
		background-position: 0 0;
	}
	50% {
		background-position: 300% 0;
	}
	100% {
		background-position: 0 0;
	}
}
`;