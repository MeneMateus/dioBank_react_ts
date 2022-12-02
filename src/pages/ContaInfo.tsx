import {Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ContaInfo = () => {
    return (
        <Text>
            Informações da conta <Link to='/conta/1'>Clique aqui</Link>
        </Text>
    )
}

export default ContaInfo