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
      <Flex display={{ base: "none", md: "flex" }} align={"center"}>
        <Link href={"/about"}>
          <Text
            fontSize="2xl"
            marginRight="0px"
            color="brand.100"
            fontWeight={pathname == "/about" ? "bold" : "normal"}
            _hover={{
              fontWeight: "bold",
            }}
          >
            About
          </Text>
        </Link>
      </Flex>
      <IconButton
        bg="none"
        aria-label="Hamburger menu"
        fontSize={40}
        display={{ base: "flex", md: "none" }}
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
            display={{ base: "flex", md: "none" }}
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavMenu;
