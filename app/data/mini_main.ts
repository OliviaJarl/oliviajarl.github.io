const miniMain = {
    title: "Myco Main & Myco Mini",
    about: " and I did this project in collaboration with Ascom, a company that provides communication and collaboration solutions to several industries, one of them being healthcare. Healthcare workers sometimes find themselves in situations where conventional mobile devices, such as phones and pagers, prove impractical. Examples of these situations are when wearing protective clothing or having occupied hands. This project aimed to explore how touchless interfaces could facilitate healthcare workers’ workflow by integrating them into their communication devices. The project followed an iterative design process, where user studies at several hospital departments were essential to understand the complex use context. Healthcare workers were also involved in evaluations of our ideas to further enhance our understanding of their needs and challenges. The project resulted in identified problem areas, requirements for integrating touchless interfaces and two prototypes.",
    posterSrcSet: "/mini_main/poster_image.jpg 359w, /mini_main/poster_image.jpg 637w, /mini_main/poster_image.jpg 1280w",
    poster_image_small: "/mini_main/poster_image.jpg",
    details: 
        {
        role:"We did almost everything together, but I was mainly responsible for the 3D modelling in Alias, while Amanda did most of the illustrations. ",
        challenge:"Healthcare workers are often in situations where they can not touch their communication devices, for example, when wearing protective clothing or when helping a patient. This thesis aimed to explore how touchless interfaces could be applied when the traditional interfaces prove impractical.",
        projectTime:"20 weeks, full time"
    }
    ,
    process_overview: [
        {
        id: "1",
        title: "Literature studies", 
        image:  "/literature.svg",
        },
        {
        id: "2",
        title: "User studies", 
        image:  "/research.svg",
        },
        {
        id: "3",
        title: "Analyse", 
        image:  "/analyse.svg",
        },
        {
        id: "4",
        title: "Ideate", 
        image:  "/ideate.svg",
        },
        {
        id: "5",
        title: "Prototype", 
        image:  "/prototype.svg",
        },
        {
        id: "6",
        title: "Evaluate", 
        image:  "/evaluate.svg",
        },
    ],
    design_process: [
        {
        id: "1",
        title: "User studies", 
        description: "In our data gathering, we performed eight interviews with preschool staff, three observations at preschools and literature studies on children’s cognitive and motor development. The children were the primary users, and the preschool staff were the secondary users. During the interviews and observations, we focused on the preschool's existing storage solutions, what type of toys are stored, and the routines when toys are taken out and picked up.",
        images: "/zoolo/zoolo_data_2.jpg"
        },
        {
        id: "2",
        title: "Analyse", 
        description: "We sorted the gathered data in an affinity diagram to identify problems and what caused the problem. The study results were the basis for a requirement list for developing a new storage solution. The requirement list was categorised into three main categories. The first category included more general requirements, such as what external factors it must handle and what functionality it must have, while the second and third categories included requirements regarding the users’ physical and cognitive abilities.",
        images: ""
        },
        {
        id: "3",
        title: "Ideate", 
        description: "Before the ideation started, we narrowed the problem statement to smaller toys. Therefore, the user studies were supplemented with a more extensive study of existing storage solutions for smaller toys on the market. We also created user personas of primary users of three different ages to make it easier to relate to the users. To ideate, we used a combination of the methods of braindrawing and brainwriting and the method of morphological matrix.",
        images: "/zoolo/ideate.jpg"
        },
        {
        id: "4",
        title: "Evaluate", 
        description: "The ideas were evaluated continuously to find the most suitable solution. We began with an elimination matrix to filter out the ideas that did not fulfil the requirements. To filter further, we asked preschool personnel to fill out a survey with questions about the ideas. The data from the survey supported the execution of a Pugh method, which resulted in three remaining concepts. We further developed these concepts and had users evaluate them to help us select the best one.",
        images: "/zoolo/evaluate.png"
        },
        {
        id: "5",
        title: "Prototype", 
        description: "To explore appropriate dimensions, we made a cardboard prototype of the winning concept at a scale of 1:1. The toy markings were inspired by pictures used in augmentative and alternative communication to consider the younger children's cognitive ability. The final design was visualised by a 3D model we made in Autodesk Alias.",
        images: "/zoolo/prototype.jpg"
        },
    ],
    results: "This project had three main results: a list of problem areas where touchless interfaces could be beneficial, a list of requirements for integrating touchless interfaces in healthcare communication devices and two prototypes exemplifying how these requirements could be implemented. The physical properties of the prototypes were represented by rendered images and 3D printings, while storyboards were used to explain their interactions.",
    result_problems: "The list below contains the titles of 12 problem areas that could possibly benefit from touchless interfaces. They are similar, and only some factors differentiate them from one another. These factors result in different circumstances, so it was important to distinguish them. For example, when a healthcare worker follows hygiene routines, their hands can be free to interact with a device as long as they do not touch anything, compared to when their hands are occupied during two-handed tasks. Moreover, the procedures for handling calls differ from those for handling alerts.",
    result_requirements: "The requirements are intended for people who design healthcare communication devices with integrated touchless interfaces, and there are several fundamental requirements regarding mobile communication devices. They are primarily based on the user studies conducted during the project. The requirements are organised into eight categories:",
    problem_areas: [        
        {
            id: 1,
            title: "Following hygiene routines while responding to alerts",
        },
        {
            id: 2,
            title: "Following hygiene routines while managing incoming calls",
        },
        {
            id: 3,
            title: "Following hygiene routines while accessing information",
        },
        {
            id: 4,
            title: "Following hygiene routines while managing telemetry",
        },
        {
            id: 5,
            title: "Responding to alerts during two-handed, point-of-care tasks",
        },
        {
            id: 6,
            title: "Managing incoming calls during two-handed, point-of-care tasks",
        },
        {
            id: 7,
            title: "Access information during two-handed, point-of-care tasks",
        },
        {
            id: 8,
            title: "Initiate calls during two-handed, point-of-care tasks",
        },
        {
            id: 9,
            title: "Call for assistance while physically restrained",
        },
        {
            id: 10,
            title: "Managing calls during two-handed, non-point-of-care tasks",
        },
        {
            id: 11,
            title: "Workflow deviations when confirming alerts",
        },
        {
            id: 12,
            title: "Workflow deviations when rejecting alerts",
        },
    ],
    requirements: [        
        {
            id: 1,
            title: "Hardware",
        },
        {
            id: 2,
            title: "Social aspects",
        },
        {
            id: 3,
            title: "General functionalities",
        },
        {
            id: 4,
            title: "Alert functionalities",
        },
        {
            id: 5,
            title: "Call functionalities",
        },
        {
            id: 6,
            title: "Usability",
        },
        {
            id: 7,
            title: "Voice user interface",
        },
        {
            id: 8,
            title: "Gesture-based interface",
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

export default miniMain;
