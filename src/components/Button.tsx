import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface IButton {
    texto: string,
    theme: string,
    onClick: MouseEventHandler
}

export const ButtonDiv = ({texto,theme,onClick}: IButton) => {
    return(<>
    <Button onClick={onClick} colorScheme={theme} size='sm' width='100%'>{texto}</Button>
    </>
    )
}
