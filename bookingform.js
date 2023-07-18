import { Box, Flex, Text, Select, Input , Button} from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
  } from '@chakra-ui/react'
import { useState } from "react";

export default function Bookingform(prop){

    const[date, setDate] = useState();
    const[time, setTime] = useState(17);
    const[guests, setGuests] = useState(4);

    return (
        <form>
          <Box bg="whitesmoke">
            <Flex flexDirection="column" h="90vh"p="2rem" bgGradient="linear(to bottom, teal.200, teal.600)"  alignItems="center" justifyContent="center">
              <Box bg="white" borderRadius="2rem" h="70vh" w="50vw" p="2rem">
                <Text fontSize="2rem" textAlign="center" mb="2rem">
                  Make a Reservation
                </Text>
                <Text fontSize="1.2rem" fontWeight="bold" mb="0.5rem">
                  Choose date
                </Text>
                <Box display="inline-block">
                  <Input type="date" onClick={(e)=> setDate(e.target.value)} />
                </Box>
                <Text fontSize="1.2rem" fontWeight="bold" mt="1.5rem" mb="0.5rem">
                  Choose time
                </Text>
                <Box display="inline-block">
                  <Select placeholder="Select option" onClick={(e)=> setTime(e.target.value)}>
                    {prop.availableTimes.map(
                        x=> <option value={x}>{x}:00</option>
                    )
                    }
                  </Select>
                </Box>
                <Text fontSize="1.2rem" fontWeight="bold" mt="1.5rem" mb="0.5rem">
                  Number of guests
                </Text>
                <Box display="inline-block">
                  <NumberInput defaultValue={4} min={1} max={8} clampValueOnBlur={false} onClick={(e)=> setGuests(e.target.value)}>
                    <NumberInputField />
                    <NumberInputStepper />
                  </NumberInput>
                </Box>
                <Box mt="2rem" textAlign="center">
              <Button
                colorScheme="teal"
                size="lg"
                borderRadius="1rem"
                onClick={() => console.log('Reservation submitted')} // Add your reservation submission logic here
              >
                Make Your Reservation
              </Button>
            </Box>
              </Box>
            </Flex>
          </Box>
        </form>
      );
}
