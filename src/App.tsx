import React, { useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import avatarImage from "./assets/avatar.jpg";
import avatarImageTwo from "./assets/avatar2.jpg";
import { Card } from "./components/Card";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { ProjectModal } from "./components/ProjectModal";
import Map from "./assets/Telas/canva.png";
import LoginIrri from "./assets/Telas/LoginIrri.png";
import FarmMap from "./assets/Telas/maps.png";
import PivotEdit from "./assets/Telas/PivotEdit.png";
import PanelCr from "./assets/Telas/telaCresça.png";
import LoginCr from "./assets/Telas/inicio.png";
import ClassCr from "./assets/Telas/Aula.png";
import CertificateCr from "./assets/Telas/Certificate.png";
import LikeOne from "./assets/Telas/twilio1.png";
import LikeTwo from "./assets/Telas/twilio2.png";
import ThalesOne from "./assets/Telas/appThaes.png";
import ThalesTwo from "./assets/Telas/screenThales1.png";
import ThalesThree from "./assets/Telas/screenThales2.png";
import ThalesFour from "./assets/Telas/screenThales3.png";
import BwbOne from "./assets/Telas/atacapet.png";
import BwbTwo from "./assets/Telas/atacapet2.png";
import BwbThree from "./assets/Telas/atacapet3.png";
import VarejonOne from "./assets/Telas/varejon1.png";
import VarejonTwo from "./assets/Telas/varejon2.png";
import VarejonThree from "./assets/Telas/varejon3.png";
import VarejonFour from "./assets/Telas/varejon4.png";
import pdf from "./resume.pdf";

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

  const MotionBox = motion.custom(Box);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useState({
    title: "",
    images: [""],
    mobile: false,
  });

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
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => homeRef.current.scrollIntoView()}
            mr={4}
          >
            Home
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => aboutRef.current.scrollIntoView()}
            mr={4}
          >
            About
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => resumeRef.current.scrollIntoView()}
            mr={4}
          >
            Resume
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
            onClick={() => projectsRef.current.scrollIntoView()}
            mr={4}
          >
            Projects
          </Text>
          <Text
            cursor="pointer"
            display={["none", "none", "inherit", "inherit"]}
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
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box>
          <Text fontSize={32}>HELLO</Text>
          <Text fontSize={40}>I'm Lucas Santana</Text>
          <Text fontSize={22} w="350px">
            I'm full stack developer and computer engineering student located in
            Brazil
          </Text>
          <Button mt={4} color="#02A1E8">
            <a href={pdf} target="_blank" rel="noopener noreferrer" download>
              Donwload CV
            </a>
          </Button>
        </Box>

        <Avatar
          display={["none", "none", "inherit", "inherit"]}
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
        flexDirection={["column", "column", "row", "row"]}
      >
        <Image
          boxShadow="2xl"
          rounded="md"
          bg="white"
          src={avatarImageTwo}
          width={400}
          borderRadius={10}
          mb={[10, 10, 0, 0]}
        />

        <Box ml={10} width="100%">
          <Heading>ABOUT ME</Heading>
          <Text fontSize={16}>
            My name is Lucas Santana, I'm a computer engineer student from the
            Federal University of Itajubá. Actually I'm working at front-end and
            back-end projects and I have already worked using technologies such
            as React, Capacitor TypeScript, NodeJs, Puppeteer, Electron,
            Fastify, TypeORM and MySQL
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
          date="01/2020 - 11/2020"
          title="Teepad"
          text={[
            "I participated in a project of a irrigation startup called Irricontrol, creating the panel site and using React, TS, Sass, Material UI and Google Maps API's.",
            "Creation of a panel to monitor energy bill using NodeJs, Puppeteer, Electron, Fastify, TypeORM and MySQL.",
            "Developing the site of Cresça Mais, that is a course platform to business.",
          ]}
        />
        <Card
          date="2018 - Present"
          title="Education program in technology to electronic and computation"
          text={[
            "I participate in a project that aims to research and teach programming, electronic and engineering tools. The team is composed with 15 members.",
            "Application connected with ESP32 to warning when someone rings the bell and help deaf.",
            "Python tutorial to beginners in programming language.",
          ]}
        />
        <Card
          date="2019 - Present"
          title="Krakens AUV's"
          text={[
            "I work in an autonomy submarine project that aims to participate in RoboSub competition in California.",
            "In software team we work with machine learning, artificial intelligence and using Python and its tools",
          ]}
        />
        <Card
          date="03/2020 - 07/2020"
          title="Thales project"
          text={[
            "University project in partnership with Thales.",
            "Indoor navigation system, creating an android app to track the person that is using. Using smartphones sensor and beacons to create it.",
          ]}
        />

        <Heading ref={projectsRef}>PROJECTS</Heading>
        {/* <HStack mt={4}> */}
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={2}
        >
          <MotionBox
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#a6cff4"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Irricontrol",
                images: [Map, LoginIrri, FarmMap, PivotEdit],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Irricontrol</Center>
          </MotionBox>
          <MotionBox
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#1984bd"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Cresçamais",
                images: [PanelCr, LoginCr, ClassCr, CertificateCr],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Cresçamais</Center>
          </MotionBox>
          <MotionBox
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#1f4e6d"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Like water - Twilio",
                images: [LikeOne, LikeTwo],
                mobile: false,
              });
              onOpen();
            }}
          >
            <Center h="250px">Like water</Center>
          </MotionBox>
          {/* </HStack> */}
          {/* <HStack mt={4}> */}
          <MotionBox
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#1f4e6d"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Thales",
                images: [ThalesOne, ThalesTwo, ThalesThree, ThalesFour],
                mobile: true,
              });
              onOpen();
            }}
          >
            <Center h="250px">Thales</Center>
          </MotionBox>
          <MotionBox
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#1984bd"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Bwbs",
                images: [BwbOne, BwbTwo, BwbThree],
                mobile: true,
              });
              onOpen();
            }}
          >
            <Center h="250px">Bwbs</Center>
          </MotionBox>
          <MotionBox
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            boxShadow="2xl"
            rounded="md"
            bg="#a6cff4"
            width={250}
            height={250}
            color={"white"}
            fontSize={30}
            onClick={() => {
              setModal({
                title: "Varejon",
                images: [VarejonOne, VarejonTwo, VarejonThree, VarejonFour],
                mobile: true,
              });
              onOpen();
            }}
          >
            <Center h="250px">Varejon</Center>
          </MotionBox>
          {/* </HStack> */}
        </Grid>
        <ProjectModal
          title={modal.title}
          images={modal.images}
          mobile={modal.mobile}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
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
          <Flex direction={["column", "column", "row", "row"]}>
            <Button
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
              colorScheme="facebook"
              leftIcon={<FaGithub />}
              onClick={() => openInNewTab("https://github.com/santanalc")}
            >
              Github
            </Button>
            <Button
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
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
              mt={[5, 5, 0, 0]}
              mr={[0, 0, 5, 5]}
              colorScheme="facebook"
              leftIcon={<FaInstagram />}
              onClick={() =>
                openInNewTab("https://www.instagram.com/lucasantanas_/")
              }
            >
              Instagram
            </Button>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
