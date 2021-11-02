import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../FIrebase/Credentials';
import { Container, Button } from 'react-bootstrap';
import TaskList from './TaskList';
import AddTask from './AddTask';

const Home = () => {
    return (
        <Container>
            <h1>Sesion iniciada</h1>
            <Button
                onClick= {() => signOut(auth) }
            >Cerrar sesion</Button>
            <br/>
            {/* {<TaskList />} */}
            <AddTask/>
        </Container>
    )
}

export default Home
