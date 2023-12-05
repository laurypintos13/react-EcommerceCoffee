import CartWidget from "./CartWidget"
import { Flex, Spacer, Box, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex bg='gray.600' color='white'>
                <Box p='4'>
                    <p>Tienda de Café</p>
                </Box>
                <Spacer />
                <Menu >
                    <MenuButton>
                        Categorías
                    </MenuButton>
                    <MenuList bg='gray.600'>
                        <MenuItem bg='gray.600' color='white'>Categoría 1</MenuItem>
                        <MenuItem bg='gray.600' color='white'>Categoría 2</MenuItem>
                        <MenuItem bg='gray.600' color='white'>Categoría 3</MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>              
                    <CartWidget/>              
                </Box>
                
            </Flex>
        </div>
    )
}

export default NavBar
