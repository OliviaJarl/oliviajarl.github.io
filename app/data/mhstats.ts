const mhStats = {
    title: "MHStats",
    about: "This website is a hobby project for which I developed a web application showcasing detailed statistics related to Musikhjälpen, a popular Swedish charity event. The site is built with React and Vite and deployed on Vercel. Before creating the UI, track lists for each year's Musikhjälpen were fetched from Sveriges Radio's API, and these were transformed into playlists using Spotify's API. Thereafter, I fetched all tracks of these playlists to make JSON files, which were used to plot track and artist statistics. I manually filled in other information for each year, such as hosts, location, and the total funds raised. The website can be visited ",
    poster_image: "/mhstats/poster_image.svg",
    details: 
        {
        challenge:"Develop a website in React that showcases statistics about the Swedish charity event Musikhjälpen.",
        projectTime:"Sporadic work during a summer"
    },
    results: "The project resulted in a website where users can explore each year's edition of Musikhjälpen, discover the top songs and artists across all years, track how a song's play frequency has evolved over time, and much more.",
    process_overview: [
        {
        id: "1",
        title: "Sveriges Radio's API", 
        image:  "/APISR.svg",
        },
        {
        id: "2",
        title: "Spotify's API", 
        image:  "/APISpotify.svg",
        },
        {
        id: "3",
        title: "Create UI", 
        image:  "/implement.svg",
        },
    ],
    design_process: [
        {
        id: "1",
        title: "Sveriges Radio's API", 
        description: "I used Sveriges Radio's API to fetch the tracks played on the channel P3 during the Musikhjälpen period for each year, and the fetches were made using Axios. While working with the API, I encountered some challenges when the documentation was incorrect. For example, the documentation said the time should be in UTC format, but it showed that Swedish time was needed to get the correct response. Additionally, pagination was not available when fetching track lists despite the documentation saying this feature should always be available. Therefore, I had to implement a while loop to retrieve all tracks. The usage of SR's API resulted in an array of strings, with each string representing a track's title and artists.",
        images: "/mhstats/srapi.webp"
        },
        {
        id: "2",
        title: "Spotify's API", 
        description: "To use Spotify's API, I followed their guide for authorization using the PKCE method to obtain an access token. For each year, a playlist was created, and the response from the SR's API was used to search for the tracks on Spotify. I checked how similar the three top search results were to the search query for each track, selecting the one with the highest similarity if its similarity met a predefined rate. After searching for all tracks, I added them to the playlists in batches of 100. Once the playlists were created, I fetched all Musikhjälpen playlists from my Spotify account, retrieved their tracks, and saved this data in JSON files, including details like albums and artists for further use in the project.",
        images: "/mhstats/spotifyapi.webp"
        },
        {
        id: "3",
        title: "Create UI", 
        description: "Once all the data was stored in JSON files, I focused on building the website's user interface using React and Vite. Before coding, I did fast sketches on Figma (see image) to decide the structure of the website. I utilised the component library Chakra UI and the routing library React Router. Framer Motion was incorporated to handle animations and add interactivity. To manage recurring data, such as details for each Musikhjälpen year and the aggregated track information, I employed React Context. Finally, I deployed the website on Vercel.",
        images: "/mhstats/UIsketch.svg"
        },
    ]
}

export default mhStats;
