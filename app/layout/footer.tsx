"use client";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Center, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Center>
      <footer style={{ marginTop: "auto" }}>
        <Flex justifyContent="center">
          <a href="mailto:olivia.ce.jarl@gmail.com">
            <Icon as={IoIosMail} boxSize={6} color="brand.100" />
          </a>
          <Link
            isExternal
            href="https://www.linkedin.com/in/olivia-jarl-944b77226/"
          >
            <Icon as={IoLogoLinkedin} boxSize={6} color="brand.100" />
          </Link>
          <Link isExternal href="https://github.com/OliviaJarl">
            <Icon as={IoLogoGithub} boxSize={6} color="brand.100" />
          </Link>
        </Flex>
        <Flex>
          <Text align="center">Designed and coded by Olivia Jarl, 2023.</Text>
        </Flex>
      </footer>
    </Center>
  );
}