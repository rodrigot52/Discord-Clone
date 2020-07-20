import React from 'react'

import ServerButton from '../Serverbutton'

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={10}/>
            <ServerButton />
        </Container>
    );
};

export default ServerList;