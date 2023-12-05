const movieMatch = {
    title: "MovieMatch",
    about: "MovieMatch was a group project where we designed and implemented a mobile application on the theme of collaborative interaction. After some brainstorming, we decided to work with an application that assists a group of people in selecting a movie. We made a prototype in Figma, which was used to perform evaluations with users. The application was implemented with the software development kit Flutter and written in Dart. We connected the application to The Movie Database’s API to get movie data and used Firebase to authenticate users and store user-related data.",
    poster_image: "/movie_match/poster_image.svg",
    poster_image_small: "/movie_match/poster_image_small.svg",
    details: 
        {
        role:"Responsible for Firebase and the logic in the application",
        challenge:"The current wide range of films to choose from can provide entertainment, yet it can also introduce difficulties regarding agreement and decision-making in group settings.",
        projectTime:"4 weeks, half time"
    },
    results: ["We made a mobile application that helps groups decide on a movie to watch. When users access the application, they are initially directed to a page displaying an overview of their different groups. The users can either create a new group, join a group or enter the group page of one of their existing groups. The group page has two tabs: the Members tab, which contains a list of the people in the group, and the Matches tab, which contains the movies everyone has agreed to watch.", "The user can enter the decision view by pressing the floating action button. In this view, each movie is presented in­dividually as a card, and the card contains a picture of the movie’s poster image, the movie title, movie rating and genre. The backside of the card includes additional information, and the user can flip the card by pressing it. The group members either approve or disapprove of a movie, and the last member who approves a movie receives a pop-up. This pop-up notifies the user that a match has been made, and the movie is added to the list of matches."],
    process_overview: [
        {
        id: "1",
        title: "Ideate", 
        image:  "/ideate.svg",
        },
        {
        id: "2",
        title: "Prototype", 
        image:  "/prototype_digital.svg",
        },
        {
        id: "3",
        title: "Implement", 
        image:  "/implement.svg",
        },
    ],
    design_process: [
        {
        id: "1",
        title: "Ideate", 
        description: "We started the project by brainstorming ideas on the theme of collaborative interaction. After we had decided to do an application where a group decides on movies, we looked at existing apps with similar functionality to get some inspiration. To lay a foundation for the user flow, we made some fast sketches.",
        images: ["/movie_match/ideation.png"]
        },
        {
        id: "2",
        title: "Prototype", 
        description: "The sketches were further developed in Figma, where we followed the Material design guidelines and used Material design components. We used the Figma prototype to evaluate the design by letting users perform predefined tasks. The participants expressed that the application was intuitive, and we got feedback on improvements.",
        images: [""]
        },
        {
        id: "3",
        title: "Implement", 
        description: "We implemented the application with the SDK Flutter, written in the programming language Dart. The application fetched movie data from the TMDB’s API, such as movie titles, poster images, genres, and descriptions. I was responsible for the app’s communication with Firebase. This includes the authentication functionality and sending and fetching group data from Firestore. It was convenient to work with Firestore because you could easily create, edit, and overview data in the web application, which helped the development process. I also coded the logic in the app, e.g., how to create or join a group and only show movies all group members have approved.",
        images: ["/movie_match/firebase.svg"]
        },
    ],
    reflections: [
        {
            id: 1,
            title: "Reflection 1",
            content: "",
        },
        {
            id: 2,
            title: "Reflection 2",
            content: "",
        },
    ]
}

export default movieMatch;
