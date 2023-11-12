export interface Project {
    name: string;
    image: string;
    description: string;
    id: number;
}
const projects = [{
    name: "Zoolo",
    image: "/zoolo/thumbnail.png",
    description:     "A project where we designed a storage solution for preschools.",
    id: 1,
},
{
    name: "Portable, digital medical record",
    image: "/digital_records/thumbnail.svg",
    description: "Bachelor's thesis made in collaboration with the company Predicare and the physiatric emergency department at Östra Sjukhuset.",
    id: 2,
},
{
    name: "MovieMatch",
    image: "/movie_match/thumbnail.png",
    description: "The purpose of the project was to design and implement a mobile application on the theme of collaborative interaction.",
    id: 3,
},
{
    name: "Twister with a twist",
    image: "/twister/thumbnail.png",
    description: "The project was collbaoration with the entertainment company Prison Island, which have sites with sets of action rooms. The theme of the project was Teamwork.",
    id: 4,
}
];

export default projects;
