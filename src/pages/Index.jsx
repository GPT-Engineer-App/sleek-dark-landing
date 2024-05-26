import { useEffect, useState } from "react";
import { Container, Text, VStack, HStack, Image, Box } from "@chakra-ui/react";
import { FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Index = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "collective.vc";
  const typingSpeed = 150; // Speed in milliseconds

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" bgGradient="linear(to-b, black, gray.800)" color="white" fontFamily="Century Gothic, Europa">
      <VStack spacing={8} align="flex-start">
        <Text fontSize="4xl" fontWeight="bold" whiteSpace="pre-wrap">
          {displayText}
          <Box as="span" animation="blink 1s step-end infinite" _after={{ content: '"|"', animation: "blink 1s step-end infinite" }} />
        </Text>
        <HStack spacing={10} justify="center" width="100%">
          <Image src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMaW5rZWRJbiUyMGxvZ298ZW58MHx8fHwxNzE2NzYyNzA0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" alt="LinkedIn" />
          <Image src="https://images.unsplash.com/photo-1636751364472-12bfad09b451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxXaGF0c0FwcCUyMGxvZ298ZW58MHx8fHwxNzE2NzYyNzA1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" alt="WhatsApp" />
          <Image src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxZb3VUdWJlJTIwbG9nb3xlbnwwfHx8fDE3MTY3NjI3MDV8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" alt="YouTube" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
