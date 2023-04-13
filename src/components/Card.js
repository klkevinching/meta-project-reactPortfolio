import { HStack, VStack, Box, Image, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <article key={title}>
      <VStack bg="white" color="black" borderRadius="8">
        <Image src={imageSrc} alt={title} borderRadius="8" width="100%"></Image>
        <Box p="4">
          <Text mb="2" fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
        <HStack px="4" pb="4" justify="start" w="100%">
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </article>
  )
};

export default Card;
