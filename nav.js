import { NavLink } from "react-router-dom"
import { Box, Flex, Spacer} from '@chakra-ui/react'

export default function Nav(){
    return (
        <Box
      id="banner"
      fontSize="1.5rem"
      fontWeight="bold"
      position="sticky"
      top="0"
      zIndex="999"
      bg= "whitesmoke"
      boxShadow="md"
      p="1.5rem"
    >
        <Flex p="0.2rem" mx="2rem" alignItems="center" align="center">
        <Spacer/>
        <Box mx="2rem">
        <NavLink to="/"style={({ isActive }) =>
            isActive ? {
                    textDecoration: 'underline',
  	                textDecorationColor: 'teal',
                    textDecorationThickness: "5px",
                    }
                    : {
                    }

        }>Home</NavLink>
        </Box>
        <NavLink to="/booking" style={({ isActive }) =>
            isActive ? {
                textDecoration: 'underline',
  	                textDecorationColor: 'teal',
                      textDecorationThickness: "5px",
                    }
                    : {
                    }
        }>Booking</NavLink>
        </Flex>
        </Box>
    )
}
