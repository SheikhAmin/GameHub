import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
interface Props { 
    children?: ReactNode;
}

const GameCardContainer = ({ children}:Props) => { 
    return <Box width={"400px"} borderRadius={30} overflow="hidden">{ children}</Box>;
}

export default GameCardContainer;