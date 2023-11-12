"use client";

import useMediaQuery from "../hooks/useMediaQuery";
import WorkSection from "./components/WorkSection";

export default function Works() {
  return (
    <>
      <WorkSection
        name="Zoolo"
        description="A project where we designed a storage solution for preschools."
        image="/zoolo/thumbnail.png"
      />
    </>
  );
}
