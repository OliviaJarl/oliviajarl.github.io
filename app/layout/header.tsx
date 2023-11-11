import { HStack, Image, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <HStack justifyContent="space-between" padding={8}>
        <Link href={"/"}>
          <div>
            <Image src="/header_image.svg" alt="Header image" />
          </div>
        </Link>
        <NavBar />
      </HStack>
    </header>
  );
}
