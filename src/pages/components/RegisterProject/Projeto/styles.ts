import styled from "styled-components";
import { shade } from "polished";

import Upload from "../../../../assets/upload.svg";

export const Box = styled.div`
    width: 80%;
    height: 57vh;

    display: flex;
    align-items: start;
    justify-content: center;

    div {
        width: 40%;
        margin-top: 2vh;

        display: flex;
        flex-direction: column;


        label, p {
            color: #00579D;
            font-size: 3vh;

            margin-left: 6vw;
            margin-bottom: 1vh;
        }

        input, textarea {
            width: 20vw;
            height: 5vh;
            margin-left: 6vw;
            margin-bottom: 3vh;

            border-radius: 0.4vh;
            border: 0px;
            padding: 1vh;

            background-color: rgb(181, 181, 181, 0.6);
            box-shadow: inset 0.1vh 0.1vh 0.1vh rgb(52, 52, 52, 0.25);
            color: #5E5E5E;
        }

        textarea {
            width: 60vh;
            height: 16vh;
        }

        &:last-child {
            input[type='file'] {
                display: none;
            }
              
            label {
                width: 12.5vw;

                background-color: #C2E4FF;
                border-radius: 1vh;
                color: #343434;

                padding: 2vh;
                padding-left: 1vh;
                
                font-size: 1.8vh;
                cursor: pointer;    

                box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

                &:hover {
                    background-color: ${shade(0.02, "#C2E4FF")}
                }

                &::after {
                    content: '';
                    width: 1.2vw;
                    height: 2.2vh;
                    position: absolute;

                    margin-top: 0.2vh;
                    margin-left: 0.5vw;

                    background-image: url(${Upload});
                    background-size: cover;
                    background-position: center;
                }
            }
        }
    }
`;