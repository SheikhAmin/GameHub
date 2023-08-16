import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/Bs";

const Serachinput = () => { 
    return (
        <InputGroup>
            <InputLeftElement children={ <BsSearch/>} />
            <Input borderRadius={20} placeholder="Search games..." variant={'filled'}></Input>
        </InputGroup>
        
    )
}

export default Serachinput;