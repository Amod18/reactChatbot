import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import steps from './data/steps.json';
import logo from './CMSlogo.png'

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'black',
};

const config = {
    floating: true,
};

export default function Temp() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Chatbot
                    recognitionEnable={true} // --> For giving the voice inputs
                    botAvatar={logo} // --> Bot logo.
                    headerTitle="Chatbot" // --> Title for the chat.
                    steps={steps} // --> Passing the json file in the chatbot component.
                    {...config} // --> Passing the configuration details in the chatbot component.
                />
            </ThemeProvider>
        </>
    );
}