import React from 'react'
import { Stack, Container, Row, Col, Button} from 'react-bootstrap';

const TaskList = ({taskList}) => {
    return (
        <Container>
            <Stack>
                {taskList.map((item )=> (
                    <div key={item.id}>
                        <Row >
                            <Col>{item.descripcion}</Col>
                            <Col>
                                <Button>ver archivo</Button>
                            </Col>
                            <Col>
                                <Button 
                                //onClick={() => deleteTask(item.id)}
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
