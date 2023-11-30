"use client";
import Introduction from "./components/Introduction";
import { Heading } from "@chakra-ui/react";
import WorkGrid from "./components/WorkGrid";

export default function Home() {
  return (
    <>
      <Introduction />
      <WorkGrid />
    </>
  );
}
