import styled from 'styled-components';

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;

    background-color: white;
    border: 0.7vh solid #00579D;
    overflow: hidden;
`;

export const Waves = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    circle {
        width: 200%;
        height: 8vh;
        
        &:nth-child(1) {
            

            background: #00579D;
            
        }

        &:nth-child(2) {
            background: #0075B1;
            
        }

        &:nth-child(3) {
            background: #0091BD;
            
            
        }

        &:nth-child(4) {
            background: #009ecf;
            
        }
    }
`;