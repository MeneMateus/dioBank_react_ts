import { Box, Center, SimpleGrid, Spinner,Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn, setUserData,isUserData } = useContext(AppContext);


  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, [setUserData]);

  const nowData = new Date();

  

  if (isUserData && id !== isUserData.id ) {
    navigate("/");
  }

  return (
    <Box backgroundColor="purple" minHeight={"100vh"}>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {isUserData.name === undefined || isUserData === null ? (
            <Center>
              <Spinner size="xl" color="white"></Spinner>
            </Center>
          ) : (
            <>
              <CardInfo
                content={`${nowData.getDay()} / ${nowData.getMonth()} / ${nowData.getFullYear()} ${nowData.getHours()}:${nowData.getMinutes()}`}
                mainContent={`Bem vindo(a) ${isUserData?.name}!`}
              />
              <CardInfo
                content={`R$: ${isUserData?.balance}`}
                mainContent={`Saldo: `}
              />
              <Text>
            Informações da conta <Link to='/user/'>Clique aqui</Link>
        </Text>
            </>
          )}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Conta;
