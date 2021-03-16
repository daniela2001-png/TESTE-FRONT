import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: #f5f6f6;
    background: -moz-linear-gradient(top, #f5f6f6 0%, #dbdce2 21%, #fff 49%, #fff 80%, #fff 100%);
    background: -webkit-linear-gradient(top, #f5f6f6 0%,#dbdce2 21%,#fff 49%,#fff 80%,#fff 100%);
    background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#fff 49%,#fff 80%,#fff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#fff',GradientType=0 );
    height: 100vh;
    position: relative;
    width: 100%;
`;

export const InfoP = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 100;
`

export const CardProfile = styled.div`
    width: 65%;
    height: 90%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 10px 3px 10px #000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    position: absolute;
`

export const UperContainer = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    background: linear-gradient(to left, #2d00f7, #ff0291);
    margin-top: -30%;
    margin-left: 0px;
    margin-right: 0px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px #000;
    position: absolute;
`

export const ImgContainer = styled.img`
    background: #000;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding: 5px;
    transform: translate(95px, 45px);
    margin-right: 250px;
    margin-top: 50px;
`

export const ComponentImg = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
`

export const ComponentName = styled.div`
    margin-top: 50px;
    margin-left: calc(1em + 3vw);
`

export const ComponentBody = styled.div`
    background: #f5f6f6;
    background: -moz-linear-gradient(top, #f5f6f6 0%, #dbdce2 21%, #dbdce2 49%, #dbdce2 80%, #fff 100%);
    background: -webkit-linear-gradient(top, #f5f6f6 0%,#dbdce2 21%,#dbdce2 49%,#dbdce2 80%,#fff 100%);
    background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#dbdce2 49%,dbdce2 80%,#fff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f6f6', endColorstr='#fff',GradientType=0 );
    height: 100vh;
    position: relative;
    width: 100%;
`;

export const ComponentSection1 = styled.div`
    width: 66%;
    height: auto;
    overflow-x:hidden;
    margin-left: 225px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px #000;
    display: flex;
    margin-top: 100vh;
    justify-content: center;
    position: absolute;
    padding: 20px;
`

export const ComponentSection2 = styled.div`
    width: 66%;
    height: auto;
    overflow-x:hidden;
    background: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 3px 1px #000;
    margin-left: 225px;
    margin-top: 50px;
    position: absolute;
    padding: 20px;
`

export const ContentH1 = styled.h1`
    font-size: 40pt;
    font-weight: bold;
    position: relative;
    font-family: "Fredoka One";
    transition: all 300ms ease-in-out;
    text-shadow: 1px -1px 1px rgb(196, 196, 196),
                2px -2px 1px rgb(196, 196, 196),
                3px -2px 1px rgb(196, 196, 196),
                4px -3px 2px rgb(196, 196, 196),
                5px -3px 2px rgb(196, 196, 196),
                6px -3px 2px rgb(196, 196, 196),
                7px -3px 3px rgb(196, 196, 196),
                8px -4px 3px rgb(196, 196, 196),
                9px -4px 3px rgb(196, 196, 196),
                10px -4px 4px rgb(196, 196, 196);
    margin-left: 10vh;
`

export const ContentNameH1 = styled.h1`
    font-size: 40pt;
    font-weight: bold;
    position: relative;
    font-family: "Fredoka One";
    transition: all 300ms ease-in-out;
    text-shadow: 1px -1px 1px rgb(196, 196, 196),
                2px -2px 1px rgb(196, 196, 196),
                3px -2px 1px rgb(196, 196, 196),
                4px -3px 2px rgb(196, 196, 196),
                5px -3px 2px rgb(196, 196, 196),
                6px -3px 2px rgb(196, 196, 196),
                7px -3px 3px rgb(196, 196, 196),
                8px -4px 3px rgb(196, 196, 196),
                9px -4px 3px rgb(196, 196, 196),
                10px -4px 4px rgb(196, 196, 196);
    margin-left: 5px;
`

export const ContentName2H1 = styled.h1`
    font-size: 40pt;
    font-weight: bold;
    position: absolute;
    font-family: "Fredoka One";
    transition: all 300ms ease-in-out;
    text-shadow: 1px -1px 1px rgb(196, 196, 196),
                2px -2px 1px rgb(196, 196, 196),
                3px -2px 1px rgb(196, 196, 196),
                4px -3px 2px rgb(196, 196, 196),
                5px -3px 2px rgb(196, 196, 196),
                6px -3px 2px rgb(196, 196, 196),
                7px -3px 3px rgb(196, 196, 196),
                8px -4px 3px rgb(196, 196, 196),
                9px -4px 3px rgb(196, 196, 196),
                10px -4px 4px rgb(196, 196, 196);
    margin-left: 5px;
    padding: 20px;
    margin: 20px;
`

export const ContentProfile = styled.div`
    margin-top: 30vh;
    margin-left: 5%;
    margin-right: 40px;
    padding: 20px;
    height: auto;
    overflow-x:hidden;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px #000;
`
