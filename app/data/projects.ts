export interface Project {
    name: string;
    image: string;
    description: string;
    url: string;
    id: number;
}
const projects = [{
    name: "Zoolo",
    image: "/zoolo/thumbnail.svg",
    description: "The theme of the project was the storage of outdoor toys in preschools. We performed user studies, and the results were used to develop a new storage solution.",
    url: "/works/zoolo",
    id: 1,
},
{
    name: "Portable, digital medical record",
    image: "/digital_records/thumbnail.svg",
    description: "This project was my bachelor's thesis, where we developed a portable, digital medical record for a psychiatric emergency department.",
    url: "/works/digital_records",
    id: 2,
},
{
    name: "MovieMatch",
    image: "/movie_match/thumbnail.png",
    description: "The purpose of the project was to design and implement a mobile application on the theme of collaborative interaction.",
    url: "/works/movie_match",
    id: 3,
},
{
    name: "Twister with a twist",
    image: "/twister/thumbnail.png",
    description: "The project was collbaoration with the entertainment company Prison Island, which has sites with sets of action rooms. The theme of the project was Teamwork.",
    url: "/works/twister",
    id: 4,
}
];

export default projects;
