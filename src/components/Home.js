import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../FIrebase/Credentials';
import { Container, Button } from 'react-bootstrap';
import TaskList from './TaskList';
import AddTask from './AddTask';

const Home = () => {
    const fakeData = [
        {id:645487694564565465, descripcion:'tarea falsa 1', url:'https://picsum.photos/'},
        {id:64544354684534545, descripcion:'tarea falsa 2', url:'https://picsum.photos/'},
        {id:645546787867558777445, descripcion:'tarea falsa 3', url:'https://picsum.photos/'},
        {id:6454243783683563586358/67/87534545, descripcion:'tarea falsa 4', url:'https://picsum.photos/'}
    ]
    return (
        <Container>
            <h1>Sesion iniciada</h1>
            <Button
                onClick= {() => signOut(auth) }
            >Cerrar sesion</Button>
            <br/>
            <TaskList  fakeData={fakeData}/>
            <AddTask/>
        </Container>
    )
}

export default Home
