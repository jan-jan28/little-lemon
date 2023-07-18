import { Box, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import Presentation from "./Presentation";
export default function Home(){
    return(
        <>
        <Presentation/>
        <Box h="100vh" backgroundColor="gray.100"  >
        <Flex alignItems="center">
            <Box m="8rem 8rem 8rem 3rem">
            <Box
            pb="0rem"
            borderBottom="10px solid teal"
            w="fit-content"
            m="0"
            >
            <Heading fontSize="3.5rem" textAlign="center">
                About Us
            </Heading>
            </Box>
            <Heading fontSize="1.2rem" mt="5rem">We are Mario and Adrian, two dedicated chefs and proud owners of "Little Lemon." Our passion for culinary excellence drives us to use locally sourced, organic ingredients, promoting sustainability and supporting our community. With scratch-made dishes crafted from the heart, we aim to provide unforgettable dining experiences while ensuring fair wages for our staff. "Little Lemon" is not just a restaurant; it's our dream turned reality, and we're excited to share it with you!</Heading>
            </Box>
            <Spacer/>
            <Box  position="relative" m="8rem 3rem 8rem 8rem">
                <Box position="absolute" top="0" left="0">
                <Image src="Mario and Adrian A.jpg" alt="chefs" w="150rem"  borderRadius="md" boxShadow="lg"  loading="lazy"/>
                </Box>
                <Box top="50%" left="0" transform="translate(-50%,70%)">
                <Image src="Mario and Adrian B.jpg" alt="chefs" w="150rem"  borderRadius="md" boxShadow="lg"  loading="lazy"/>
                </Box>
            </Box>
        </Flex>
        </Box>
        </>
    )
}
