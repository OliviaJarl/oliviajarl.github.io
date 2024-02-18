"use client";
import Introduction from "./components/Introduction";
import WorkGrid from "./components/WorkGrid";
import CurvyBackground from "./components/CurvyBackground";

export default function Home() {
  return (
    <>
      <CurvyBackground />
      <Introduction />
      <WorkGrid />
    </>
  );
}
