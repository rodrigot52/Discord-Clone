import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}

        </User>
    );
};

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Rodrigo Teixeira" />

            <Role>Off-line - 20</Role>
            <UserRow nickname="Liliane Cruz" isBot />
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
            <UserRow nickname="Fulano"/>
        </Container>
    );
};

export default UserList;