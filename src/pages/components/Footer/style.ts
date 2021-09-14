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
            width: 50vw;
            height: 0.1vh;
            background-color: #00579D;
            position: absolute;
            margin: 2.4vh 0 0 3.8vw;    
            opacity: 0.4;
        }
    }

    ${props => props.tipo === "register_consultants" && css`
        margin-top: 70vh;
        margin-left: 2.4vw
    `}
`;