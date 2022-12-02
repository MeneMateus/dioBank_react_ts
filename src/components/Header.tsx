import { Box, Center, Text, Image, Flex, Spacer, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";

export const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AppContext);
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor="White" padding='5px'>
      <Box>
        <Center>
          <Image
            boxSize="100px"
            src="https://cdn-icons-png.flaticon.com/512/3164/3164017.png"
            alt="Dan Abramov"
          />
          <Text as="b" fontSize="4xl" color="purple">
            BankD.io
          </Text>
        </Center>
      </Box>
      <Spacer />
      {
        isLoggedIn && <Button onClick={() => logout()}>Sair</Button>
      }
    </Flex>
  );
};
