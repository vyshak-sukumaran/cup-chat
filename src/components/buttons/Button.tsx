import styled from 'styled-components'

const Button = styled.button`
    background-color: var(--blue);
    font: inherit !important;
    padding: 1rem;
    border-radius: 5px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: white;
    transition: all 200ms ease-in-out;
    border: 0 !important;
    outline: 0 !important;

    &:hover {
        cursor: pointer;
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        background-color: var(--blue-dark);
    }
`
export default Button