import { SimpleGrid } from "@chakra-ui/react";
import WorkCard from "./WorkCard";

const WorkGrid = () => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={4}
      padding={20}
      justifyContent="center"
    >
      <WorkCard
        name="Zoolo"
        description="A project where we designed a storage solution for preschools."
        image="/zoolo/thumbnail.png"
      />
      <WorkCard
        name="Portable, digital medical record"
        description="Bachelor's thesis made in collaboration with the company Predicare and the physiatric emergency department at Östra Sjukhuset."
        image="/digital_records/thumbnail.svg"
      />
      <WorkCard
        name="MovieMatch"
        description="The purpose of the project was to design and implement a mobile application on the theme of collaborative interaction."
        image="/movie_match/thumbnail.png"
      />
      <WorkCard
        name="Twister with a twist"
        description="The project was collbaoration with the entertainment company Prison Island, which have sites with sets of action rooms. The theme of the project was Teamwork."
        image="/twister/thumbnail.png"
      />
    </SimpleGrid>
  );
};

export default WorkGrid;
