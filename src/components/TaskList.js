import React from 'react'
import { Stack, Container, Row, Col, Button} from 'react-bootstrap';
import { updateDoc, doc } from 'firebase/firestore'
import { fireStore } from '../FIrebase/Credentials';


const TaskList = ({task, email, setTask}) => {

    async function deleteTask(id) {
        const newListTask = task.filter((item) => (item.id !== id));
        ///update DB
        const docuRef = doc(fireStore, `usuarios/${email}`);
        await updateDoc(docuRef, { tareas: [...newListTask] });
        //update state
        setTask(newListTask);
    }
    return (
        <Container>
            <Stack>
                {task.map((item )=> (
                    <div key={item.id}>
                        <Row >
                            <Col>{item.descripcion}</Col>
                            <Col>
                                <Button>ver archivo</Button>
                            </Col>
                            <Col>
                                <Button 
                                onClick={() => deleteTask(item.id)}
                                >eliminar Tarea</Button>
                            </Col>
                        </Row>
                        <hr/>
                    </div>)
                )}
            </Stack>
        </Container>
    )
}

export default TaskList
