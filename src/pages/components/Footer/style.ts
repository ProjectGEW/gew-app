import styled, {css} from 'styled-components';

interface footerProps {
    tipo?: string;
}

export const FooterForm = styled.div<footerProps>`
    width: 6vw;
    height: 6vh;
    
    display: grid;
    grid-template-areas: 'item1 item2'
                        'item3 item4';
    grid-gap: 0.5vh;
    position: absolute;

    .item1 {
        grid-area: item1;
        background: #00579D;
    }

    .item2 {
        grid-area: item2;
        background: #fff;
    }

    .item3 {
        grid-area: item3;
        background: #6EAAC4;
    }

    .item4 {
        grid-area: item4;
        background: #28B9DA;

        &::before {
            content: '';
            width: 54vw;
            height: 0.1vh;
            background-color: #00579D;
            position: absolute;
            margin: 2.7vh 0 0 3.5vw;    
            opacity: 0.4;
        }
    }

    ${props => props.tipo === "register_consultants" && css`
        margin-top: 72vh;
        margin-left: 2.4vw;
    `}

    ${props => props.tipo === "register_project" && css`
      width: 8vw;
      height: 3.2vh;
      grid-template-areas: 'item1 item3 item2 item4';
      margin-top: 65vh;
      margin-left: -67vw;

      .item2 {
        grid-area: item2;
        background: #0091BD;
      }
    `}

    ${props => props.tipo === "confirm_project" && css`
      width: 8vw;
      height: 3.2vh;
      grid-template-areas: 'item1 item3 item2 item4';
      margin-top: 74.4vh;
      margin-left: 1.5vw;
      
      .item2 {
        grid-area: item2;
        background: #0091BD;
      }
    `}

    ${props => props.tipo === "registerProjects" && css`
      margin-top: 72vh;
      margin-left: 2.4vw;
    `}
`;