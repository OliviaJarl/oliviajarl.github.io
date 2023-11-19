"use client";
import {
  Flex,
  HStack,
  Spacer,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

import Link from "next/link";

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [displayMenu, setDisplayMenu] = useState("none");
  return (
    <Flex justifyContent="space-between">
      <Flex display={{ base: "none", sm: "flex" }} align={"center"}>
        <Link href={"/about"}>
          <Text
            fontSize="xl"
            marginRight="40px"
            fontWeight={pathname == "/about" ? "bold" : "normal"}
          >
            About
          </Text>
        </Link>
        <Link href={"/works"}>
          <Text
            fontSize="xl"
            fontWeight={pathname == "/works" ? "bold" : "normal"}
          >
            Works
          </Text>
        </Link>
      </Flex>
      <IconButton
        bg="none"
        aria-label="Hamburger menu"
        fontSize={40}
        display={{ base: "flex", sm: "none" }}
        icon={<IoMenu />}
        onClick={() => setDisplayMenu("flex")}
      />
      <Flex
        w="100vw"
        display={displayMenu}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justifyContent="flex-end">
          <IconButton
            aria-label="Close-button"
            marginTop={3}
            marginRight={3}
            fontSize={40}
            display={{ base: "flex", sm: "none" }}
            icon={<IoClose />}
            onClick={() => setDisplayMenu("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link href={"/about"}>
            <Button
              bg="none"
              fontSize="xl"
              fontWeight={pathname == "/about" ? "bold" : "normal"}
              onClick={() => setDisplayMenu("none")}
            >
              About
            </Button>
          </Link>
          <Link href={"/works"}>
            <Button
              bg="none"
              fontSize="xl"
              fontWeight={pathname == "/works" ? "bold" : "normal"}
              onClick={() => setDisplayMenu("none")}
            >
              Works
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HamburgerMenu;
