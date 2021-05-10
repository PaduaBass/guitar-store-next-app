import styled from 'styled-components';

export const Content = styled.div`
    background: #333;
    width: 350px;
    height: 400px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    flex-direction: column;
    margin-right: 40px;
    img { 
        border-radius: 4px;
        margin-bottom: 4px;
        width: 300px;
        height: 300px;
    }
    button {
        border: 0;
        background: ${props => props.theme.colors.primary};
        height: 45px;
        width: 300px;
        margin-top: 5px;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
    }
    h4 {
        background: #3339;
        position: absolute;
        width: 300px;
        height: 24px;
        align-self: center;
        text-align: center;
        margin-top: 222px;
    }
`;

export const Header = styled.div`
    position: fixed;
    width: 100%;
    background: #933;
    height: 60px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
