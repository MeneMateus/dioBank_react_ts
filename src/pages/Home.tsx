import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import {Card} from "../components/Card"
const Home = () => {
    return(
          <Box backgroundImage='https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=1380&t=st=1669093537~exp=1669094137~hmac=e6aa21e6a1f659a9e5c70503d756df88c04caf2804a6964c7d5af53bac3562ad' backgroundRepeat='no-repeat' backgroundSize='cover' >
          <Header/>
            <Card/>
          </Box>
    )
}

export default Home;