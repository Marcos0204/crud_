import React, { useState } from 'react';
import {  doc, updateDoc } from 'firebase/firestore';
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { fireStore, storage } from '../FIrebase/Credentials';

const AddTask = ({task, email, setTask}) => {
    const [ descripcion , setDescripcion ] = useState('')
    const [url, setUrl] = useState('')

    function addTaskDB(e) {
        e.preventDefault()
        //const descripcion = e.target.formDescripcion.value;
        const newArray = [
            ...task,
            {id: +new Date(),
            descripcion,
            url
            }
        ]

        const docuRef = doc(fireStore, `usuarios/${email}`);

        updateDoc(docuRef, { tareas: [...newArray]})
        setTask(newArray)
        setDescripcion('')
    }

    async function handlerFile(e) {
        //detectar el archivo
        const img = e.target.files[0]
        const imgRef= ref(storage, `documents/${img.name}`);
        
        ///subir a la DB
        await uploadBytes(imgRef, img)
        const download = await getDownloadURL(imgRef);
        setUrl(download)

    }

    return (
            <Container>
                <Form >
                    <Row className="mb-5">
                    <Col>
                        <Form.Control
                        type="text"
                        value={descripcion}
                        placeholder="Describe tu tarea"
                        id="formDescripcion"
                        onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                        type="file"
                        placeholder="Añade archivo"
                        onChange = {handlerFile}
                        
                        />
                    </Col>
                    <Col>
                        <Button
                            type="submit"
                            onClick={addTaskDB}
                            > AgregarTarea</Button>
                    </Col>
                    </Row>
                </Form>
                <hr />
            </Container>
        )
    
}

export default AddTask
