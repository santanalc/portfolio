import React, { useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import avatarImage from "./assets/avatar.jpg";
import avatarImageTwo from "./assets/avatar2.jpg";
import { Card } from "./components/Card";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const openInNewTab = (url: string | undefined) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function App() {
  const homeRef = useRef(document.createElement("div"));
  const aboutRef = useRef(document.createElement("div"));
  const resumeRef = useRef(document.createElement("div"));
  const projectsRef = useRef(document.createElement("div"));
  const contactRef = useRef(document.createElement("div"));

  return (
    <ChakraProvider>
      <Box
        bg="#02A1E8"
        w="100%"
        p={4}
        pl={12}
        pr={12}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="99"
      >
        <Text>Lucas DEV.</Text>
        <Box
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            cursor="pointer"
            onClick={() => homeRef.current.scrollIntoView()}
            mr={4}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            onClick={() => aboutRef.current.scrollIntoView()}
            mr={4}
          >
            About
          </Text>
          <Text
            cursor="pointer"
            onClick={() => resumeRef.current.scrollIntoView()}
            mr={4}
          >
            Resume
          </Text>
          <Text
            cursor="pointer"
            onClick={() => projectsRef.current.scrollIntoView()}
            mr={4}
          >
            Projects
          </Text>
          <Text
            cursor="pointer"
            onClick={() => contactRef.current.scrollIntoView()}
            mr={4}
          >
            Contacts
          </Text>
        </Box>
      </Box>
      <Box
        bg="#0197E4"
        p={75}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="white"
        ref={homeRef}
      >
        <Box>
          <Text fontSize={32}>HELLO</Text>
          <Text fontSize={40}>I'm Lucas Santana</Text>
          <Text fontSize={22} w="350px">
            I'm full stack developer and computer engineering student located in
            Brazil
          </Text>
          <Button mt={4} color="#02A1E8">
            Donwload CV
          </Button>
        </Box>

        <Avatar
          width="20rem"
          height="20rem"
          name="Segun Adebayo"
          src={avatarImage}
        />
      </Box>
      <Box
        px={75}
        pt={20}
        pb={10}
        display="flex"
        alignItems="center"
        ref={aboutRef}
      >
        <Image
          boxShadow="2xl"
          rounded="md"
          bg="white"
          src={avatarImageTwo}
          width={400}
          borderRadius={10}
        />

        <Box ml={10} width="100%">
          <Heading>ABOUT ME</Heading>
          <Text fontSize={16}>
            My name is Lucas Santana, I'm a computer engineer student from the
            Federal University of Itajubá. Actually I'm working at front-end and
            back-end projects and I have already worked on the creation panel
            site for an irrigation startup, using technologies such as React,
            WebSocket, Google Maps, Capacitor and TypeScript; creation of a
            panel to monitor energy bill using NodeJs, Puppeteer, Electron,
            Fastify, TypeORM and MySQL and actual project is a course management
            like Udemy to business.
          </Text>
        </Box>
      </Box>
      <Box
        px={75}
        pt={20}
        pb={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        ref={resumeRef}
      >
        <Heading>RESUME</Heading>
        <Card
          date="March 2013 - Present"
          title="Degree in Information Technology"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Card
          date="March 2013 - Present"
          title="Degree in Information Technology"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Card
          date="March 2013 - Present"
          title="Degree in Information Technology"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Card
          date="March 2013 - Present"
          title="Degree in Information Technology"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />

        <Heading ref={projectsRef}>PROJECTS</Heading>
      </Box>
      <Box
        bg="#0197E4"
        py={10}
        px={75}
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        color="white"
        ref={contactRef}
      >
        <Box>
          <Text fontSize={16}>
            Let’s make something new, different and more meaningful? Just say
            hello!
          </Text>
          <Text fontSize={16}>+55 (13) 99141-1406 </Text>
          <Text fontSize={16}>santanalc.santos@gmail.com</Text>
          <Text fontSize={16}>Praia Grande, São Paulo</Text>
          <Text mt={4} fontSize={24}>
            MY SOCIALS
          </Text>
          <HStack mt={4}>
            <Button
              colorScheme="facebook"
              leftIcon={<FaGithub />}
              onClick={() => openInNewTab("https://github.com/santanalc")}
            >
              Github
            </Button>
            <Button
              colorScheme="facebook"
              leftIcon={<FaLinkedinIn />}
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/lucas-santos-8624b7142/"
                )
              }
            >
              Linkedin
            </Button>
            <Button
              colorScheme="facebook"
              leftIcon={<FaInstagram />}
              onClick={() =>
                openInNewTab("https://www.instagram.com/lucasantanas_/")
              }
            >
              Instagram
            </Button>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
