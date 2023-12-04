"use client";
import {
  Flex,
  HStack,
  Spacer,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState, CSSProperties } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

import Link from "next/link";

const NavMenu = () => {
  const pathname = usePathname();
  const [displayMenu, setDisplayMenu] =
    useState<CSSProperties["display"]>("none");
  return (
    <Flex justifyContent="space-between">
      <Flex display={{ base: "none", sm: "flex" }} align={"center"}>
        <Link href={"/about"}>
          <Text
            fontSize="xl"
            marginRight="40px"
            color="brand.100"
            fontWeight={pathname == "/about" ? "bold" : "normal"}
            _hover={{
              fontWeight: "bold",
            }}
          >
            About
          </Text>
        </Link>
        <Link href={"/works"}>
          <Text
            fontSize="xl"
            color="brand.100"
            fontWeight={pathname == "/works" ? "bold" : "normal"}
            _hover={{
              fontWeight: "bold",
            }}
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
        color="brand.100"
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
            bg="none"
            marginTop="15px"
            marginRight="16px"
            fontSize={40}
            color="brand.100"
            display={{ base: "flex", sm: "none" }}
            icon={<IoClose />}
            onClick={() => setDisplayMenu("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          <Link href={"/about"}>
            <Button
              color="brand.100"
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
              color="brand.100"
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

export default NavMenu;
