import { Box, Center,Text,Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Box h='100px' backgroundColor='white'>
            <Center><Image boxSize='100px' src='https://cdn-icons-png.flaticon.com/512/3164/3164017.png' alt='Dan Abramov' /><Text as='b' fontSize='4xl' color='purple'>BankD.io</Text></Center>
        </Box>
    )
}