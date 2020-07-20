import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        key={n}
                        autor="Rodrigo Teixeira"
                        date="21/07/2020"
                        content="Hoje é meu aniversario!"
                    />
                ))}

                <ChannelMessage 
                    autor="Liliane Cruz"
                    date="21/07/2020"
                    content={
                        <>
                            <Mention>@Rodrigo Teixeira</Mention>, to te devendo um fardinho de Heineken!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;