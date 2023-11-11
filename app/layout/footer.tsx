"use client";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <>
      <footer style={{ marginTop: "auto" }}>
        <HStack justifyContent="center">
          <a href="mailto:olivia.ce.jarl@gmail.com">
            <Icon as={IoIosMail} boxSize={6} />
          </a>
          <Link
            isExternal
            href="https://www.linkedin.com/in/olivia-jarl-944b77226/"
          >
            <Icon as={IoLogoLinkedin} boxSize={6} />
          </Link>
          <Link isExternal href="https://github.com/OliviaJarl">
            <Icon as={IoLogoGithub} boxSize={6} />
          </Link>
        </HStack>
        <Flex justifyContent="center">
          <Text>Designed and coded by Olivia Jarl</Text>
        </Flex>
      </footer>
    </>
  );
}
