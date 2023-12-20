const zooloData = {
    title: "Zoolo",
    about: "This was a group project that ran over two courses during my bachelor’s in industrial design engineering. In the first course, we were supposed to decide on a subject to study, and we chose outdoor storage solutions for toys in preschools. The study included interviews with preschool staff, observations of the usage of existing solutions and literature studies on children’s cognitive and motor development. We categorised and analysed the gathered data, and the results were used in the second course to support the development of a new storage solution. During this process, we worked iteratively with our ideas and performed user evaluations to understand how our ideas met the user’s needs.",
    posterSrcSet: "/zoolo/poster_image359.png 359w, /zoolo/poster_image637.png 637w, /zoolo/poster_image1280.png 1280w",
    poster_image_small: "/zoolo/poster_image359.png",
    details: 
        {
        role:"In this projects we did everything together.",
        challenge:"Current tool storage solutions are not adapted to the children´s physical and cognitive skills, nor do they increase motivationwhen cleaning up.",
        projectTime:"18 weeks, half time"
    }
    ,
    results: "We created a storage solution called Zoolo that is inspired by suitcases. The preschool staff can easily drag it in and out of a storage shed, and the adjustable handle enables an ergonomic work position. The children fetch the toys from the opening in the bottom, and to make the pick-up funnier, the children put the toys in the top opening, which is shaped like a mouth. Zoolo needs to be stable since there is a risk that children climb on it. Therefore, the wheels are slightly tilted, and the handle is an extra stabilizer. The rims of the wheels are closed to prevent pinch point hazards.",
    process_overview: [
        {
        id: "1",
        title: "User studies", 
        image:  "/research.svg",
        },
        {
        id: "2",
        title: "Analyse data", 
        image:  "/analyse.svg",
        },
        {
        id: "3",
        title: "Ideate", 
        image:  "/ideate.svg",
        },
        {
        id: "4",
        title: "Evaluate", 
        image:  "/evaluate.svg",
        },
        {
        id: "5",
        title: "Prototype", 
        image:  "/prototype.svg",
        },
    ],
    design_process: [
        {
        id: "1",
        title: "User studies", 
        description: "In our data gathering, we performed eight interviews with preschool staff, three observations at preschools and literature studies on children’s cognitive and motor development. The children were the primary users, and the preschool staff were the secondary users. During the interviews and observations, we focused on the preschool's existing storage solutions, what type of toys are stored, and the routines when toys are taken out and picked up.",
        images: [ "/zoolo/zoolo_data_2.jpg"]
        },
        {
        id: "2",
        title: "Analyse data", 
        description: "We sorted the gathered data in an affinity diagram to identify problems and what caused the problem. The study results were the basis for a requirement list for developing a new storage solution. The requirement list was categorised into three main categories. The first category included more general requirements, such as what external factors it must handle and what functionality it must have, while the second and third categories included requirements regarding the users’ physical and cognitive abilities.",
        images: [""]
        },
        {
        id: "3",
        title: "Ideate", 
        description: "Before the ideation started, we narrowed the problem statement to smaller toys. Therefore, the user studies were supplemented with a more extensive study of existing storage solutions for smaller toys on the market. We also created user personas of primary users of three different ages to make it easier to relate to the users. To ideate, we used a combination of the methods of braindrawing and brainwriting and the method of morphological matrix.",
        images: ["/zoolo/ideate.jpg"]
        },
        {
        id: "4",
        title: "Evaluate", 
        description: "The ideas were evaluated continuously to find the most suitable solution. We began with an elimination matrix to filter out the ideas that did not fulfil the requirements. To filter further, we asked preschool personnel to fill out a survey with questions about the ideas. The data from the survey supported the execution of a Pugh method, which resulted in three remaining concepts. We further developed these concepts and had users evaluate them to help us select the best one.",
        images: ["/zoolo/evaluate.png"]
        },
        {
        id: "5",
        title: "Prototype", 
        description: "To explore appropriate dimensions, we made a cardboard prototype of the winning concept at a scale of 1:1. The toy markings were inspired by pictures used in augmentative and alternative communication to consider the younger children's cognitive ability. The final design was visualised by a 3D model we made in Autodesk Alias.",
        images: ["/zoolo/prototype.jpg"]
        },
    ],
    reflections: [
        {
            id: 1,
            title: "The importance of observations",
            content: "Supplementing interviews with observations is sometimes important for the outcome of the user study, because a person who spends time in the same environment several days a week can easily overlook some shortcomings.",
        },
        {
            id: 2,
            title: "Always have a plan B",
            content: "We were planning on sharing the evaluation survey in a Facebook group for preschool staff, but we were not let in in the group. Instead, we emailed the survey to preschools in the Gothenburg area. So, when working with users, it doesn't always go as planned and it's important to have a plan B.", 
        },
        {
            id: 3,
            title: "Same level of fidelity",
            content: "In the survey, the ideas had different levels of fidelity. This affected how well the respondents understood the ideas and the comparison between the ideas became unjust.", 
        },
    ]
}

export default zooloData;
