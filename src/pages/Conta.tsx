import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);


  !isLoggedIn && navigate('/')

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const nowData = new Date();

  

  if (userData && id !== userData.id ) {
    navigate("/");
  }

  return (
    <Box backgroundColor="purple" minHeight={"100vh"}>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={16}>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner size="xl" color="white"></Spinner>
            </Center>
          ) : (
            <>
              <CardInfo
                content={`${nowData.getDay()} / ${nowData.getMonth()} / ${nowData.getFullYear()} ${nowData.getHours()}:${nowData.getMinutes()}`}
                mainContent={`Bem vindo(a) ${userData?.name}!`}
              />
              <CardInfo
                content={`R$: ${userData?.balance}`}
                mainContent={`Saldo: `}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default Conta;
