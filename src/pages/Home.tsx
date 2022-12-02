import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { ButtonDiv } from "../components/Button";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";


const Home = () => {
  const navigate = useNavigate()


  const [email, setEmail] = useState("");
  const {setIsLoggedIn} = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="none" />
  );
  const [overlay] = useState(<OverlayOne />);
  const storage = getAllLocalStorage()
    
  useEffect(()=>{
    if(storage){
      const {login} = JSON.parse(storage)
      if(login === true)navigate('/conta/1')
    }
  }, [navigate, storage])

  const validateUser = async (email:string)=> {
    const loggedIn = await login(email)
    if(!loggedIn)return alert('Email inválido')
    setIsLoggedIn(loggedIn)
    changeLocalStorage({login: true})
    navigate('conta/1')
  }

  return (
    <Box
      backgroundImage="https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=1380&t=st=1669093537~exp=1669094137~hmac=e6aa21e6a1f659a9e5c70503d756df88c04caf2804a6964c7d5af53bac3562ad"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Card>
        <Box
          backgroundColor="#FFFFFF"
          borderRadius="15px"
          padding="15px"
          width="500px"
        >
          <Center>
            <Heading mb={3} color="purple">
              Conecte-se
            </Heading>
          </Center>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input placeholder="Senha" />
          <Center>
            <ButtonDiv
              onClick={() => validateUser(email)}
              theme="teal"
              texto="Entrar"
            />
            <ButtonDiv onClick={onOpen} theme="facebook" texto="Registrar" />
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
      </Card>
    </Box>
  );
};

export default Home;
