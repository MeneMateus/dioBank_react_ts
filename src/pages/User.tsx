import { Box, Center, Spinner,} from "@chakra-ui/react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo"

const User = () => {

    const { isLoggedIn, isUserData } = useContext(AppContext);
    const navigate = useNavigate();

    if (!isLoggedIn || !isUserData) {
        navigate("/");
      }

    return(
        <Box backgroundColor={'purple'} minH={'100vh'}>
            <Box padding={'10px'}>
                <Center>
                {isUserData.name === undefined || isUserData === null ? (
            <Center>
              <Spinner size="xl" color="white"></Spinner>
            </Center>
          ) : (
                    <CardInfo content={isUserData.email} mainContent={isUserData.name}/>)}
                </Center>
            </Box>
        </Box>
    )
}

export default User