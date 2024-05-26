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
      setDisplayText((prev) => (index < fullText.length ? prev + fullText[index] : prev));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container centerContent maxW="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" bgGradient="linear(to-b, black, gray.800)" color="white" fontFamily="Century Gothic, Europa">
      <VStack spacing={8} align="flex-start">
        <Text fontSize="4xl" fontWeight="bold" whiteSpace="pre-wrap">
          {displayText}
          <Box as="span" animation="blink 1s step-end infinite" _after={{ content: '"|"', animation: "blink 1s step-end infinite" }} />
        </Text>
        <HStack spacing={10} justify="center" width="100%">
          <Box as={FaLinkedin} boxSize="50px" />
          <Box as={FaWhatsapp} boxSize="50px" />
          <Box as={FaYoutube} boxSize="50px" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
