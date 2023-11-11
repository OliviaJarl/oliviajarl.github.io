"use client";

import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname = usePathname();
  return (
    <HStack width={40} justifyContent="space-between">
      <Link href={"/about"}>
        <Text
          fontSize="xl"
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
    </HStack>
  );
};

export default NavBar;
