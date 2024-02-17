"use client";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Center, Flex, Icon, Link, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Center>
      <footer style={{ marginTop: "auto" }}>
        <Flex justifyContent="center">
          <a href="mailto:olivia.ce.jarl@gmail.com">
            <Icon
              margin="3px"
              as={IoIosMail}
              boxSize={6}
              color="brand.100"
              _hover={{
                color: "brand.200",
              }}
            />
          </a>
          <Link
            isExternal
            href="https://www.linkedin.com/in/olivia-jarl-944b77226/"
          >
            <Icon
              margin="3px"
              as={IoLogoLinkedin}
              boxSize={6}
              color="brand.100"
              _hover={{
                color: "brand.200",
              }}
            />
          </Link>
          <Link isExternal href="https://github.com/OliviaJarl">
            <Icon
              margin="3px"
              as={IoLogoGithub}
              boxSize={6}
              color="brand.100"
              _hover={{
                color: "brand.200",
              }}
            />
          </Link>
        </Flex>
        <Flex>
          <Text align="center">Made in React by Olivia Jarl, 2024</Text>
        </Flex>
      </footer>
    </Center>
  );
}
