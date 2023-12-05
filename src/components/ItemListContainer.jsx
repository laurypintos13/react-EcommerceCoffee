
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Center bg='gray.200' color='black' h='100px'>
            {greeting}
        </Center>
        
    </div>
  )
}

export default ItemListContainer
