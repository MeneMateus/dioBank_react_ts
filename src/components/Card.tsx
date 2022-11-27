import { Box, Text, Button, Center, Heading, Input, ModalCloseButton, Modal, ModalContent, ModalHeader, ModalOverlay, useDisclosure, ModalBody, ModalFooter } from "@chakra-ui/react"
import React, { useState, useEffect } from "react";
import { login } from "../services/login";
import { ButtonDiv } from "./Button";
import { api } from "../api";

interface UserData {
    email: string,
    password: string,
    name: string
}

export const Card = () => {

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='none'
        />
    )
    const [ email, setEmail] = useState('')
    const [ userData, setUserData] = useState<null | UserData>()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay,] = useState(<OverlayOne />)

    useEffect(()=>{
        const getData = async () => {
            const data: any | UserData =  await api
            setUserData(data);
        }

        getData()
    }, [])

    console.log(userData)

    return (
        <Box minHeight='100vh' padding='25px' bgGradient='linear(to-t, blue.200, purple.500)' w='550px'>
            <Box backgroundColor='#FFFFFF' borderRadius='15px' padding='15px' width='500px'>
            {/* {userData === null || userData === undefined ? <h1>Loading...</h1>:<h1>Informações carregadas</h1>} */}
                <Center><Heading mb={3} color='purple'>Conecte-se {userData?.name}</Heading></Center>
                <Input placeholder='Email' value={email} onChange={(event)=> setEmail(event.target.value)} />
                <Input placeholder='Senha' />
                <Center>
                    <ButtonDiv onClick={()=>login(email)} theme='teal' texto='Entrar' />
                    <ButtonDiv onClick={onOpen} theme='facebook' texto='Registrar' />
                </Center>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    {overlay}
                    <ModalContent>
                        <ModalHeader>Registre-se</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Bem vindo</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}