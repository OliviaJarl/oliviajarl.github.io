const miniMain = {
    title: "Myco Main & Myco Mini",
    about: " and I did this project in collaboration with Ascom, a company that provides communication and collaboration solutions to several industries, one of them being healthcare. Healthcare workers sometimes find themselves in situations where conventional mobile devices, such as phones and pagers, prove impractical. Examples of these situations are when wearing protective clothing or having occupied hands. This project aimed to explore how touchless interfaces could facilitate healthcare workers’ workflow by integrating them into their communication devices. The project followed an iterative design process, where user studies at several hospital departments were essential to understand the complex use context. Healthcare workers were also involved in evaluations of our ideas to further enhance our understanding of their needs and challenges. The project resulted in identified problem areas, requirements for integrating touchless interfaces and two prototypes.",
    posterSrcSet: "/mini_main/poster_image500.webp 500w, /mini_main/poster_image1000.webp 1000w, /mini_main/poster_image1500.webp 1500w",
    poster_image: "/mini_main/poster_image500.webp",
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
    literature_studies: "We did literature studies on touchless, haptic, and multimodal interfaces, which provided knowledge of what they imply, their benefits and drawbacks, and their social aspects. The studied touchless interfaces included eye tracking, voice user interfaces, and gesture-based interfaces. We also read literature about touchless interfaces in healthcare to gain insight into what has been investigated prior to this thesis and what conclusions others have drawn. In addition to the literature studies, we looked at existing products utilising touchless interfaces and familiarised ourselves with Ascom’s product portfolio.",
    user_studies: "We conducted user studies at five hospital departments: three types of emergency departments, one intensive care unit, and one medical department. The goal was to find problem areas where touchless interfaces could be beneficial and to gather insights to support the creation of requirements for integrating touchless interfaces. During the visits, we interviewed and observed healthcare workers. We explored how the communication and alert systems were set up, how the workwear and protective clothing looked, and how the workers simultaneously handled the devices when performing other tasks. The illustration, that Amanda made, shows a collective alert system used by most departments.",
    analyse: "An affinity diagram was created to organise, understand, and summarise the findings from the literature and user studies. The results from the affinity diagram were used to write 12 problem areas and 64 requirements, which are further explained in the Result section. Two personas and scenarios were also written, and one of the personas is included below.",
    ideate: "The next step of the project was to make design suggestions for how the requirements could be implemented. This process began with the ideation methods of brainwriting and braindrawing, where we wrote down and drew ideas for each problem area, one at a time. Some ideas were easier to explain by writing than drawing, and vice versa; therefore, combining the methods supported all ideas. Thereafter, the method of SCAMPER was employed to elaborate further on the ideas and ensure that no improvements were overlooked. A large number of ideas were generated, and to select which ones to move forward with, the ideas were evaluated against the requirements.",
    prototype_1: "The purpose of the first prototypes was to explore the ideas further and, later in the process, to receive early feedback. Seven ideas were prototyped using low-fidelity prototyping methods, such as sketching and cardboard modelling. For the ideas that used more advanced technology, images of how they could look and be utilised were employed. One of these ideas utilised eye tracking, which the requirements do not recommend. We decided to include this idea due to curiosity about the healthcare workers’ opinions about using a device similar to the current mixed-reality headsets. ",
    evaluate_1: "Healthcare workers participated in an evaluation where they interacted with our prototypes and existing products we had borrowed from Ascom. The products aimed to help the participants understand functionality that could be utilised in the prototypes. Among the products were a pair of bone-conduction headphones and a wearable smart assistant utilising voice control. They also tested gesture-based control on an Ascom smartphone. The purpose of this evaluation was to gain a deeper insight into healthcare workers’ thoughts on different touchless interfaces and what hardware they would prefer for a product integrating touchless interfaces. The evaluation with users was followed by another evaluation where we compared the prototypes against each other with the requirements in mind. Lastly, the results of the two evaluations were used to decide which ideas to continue elaborating on.",
    prototype_2: "During the second prototype session, we developed two ideas further, both in terms of physical properties and interactions. The physical shape and appearance were explored by sketching and cutting out various shapes and sizes from paper. The illustrations below show initial sketches of the two concepts. After deciding on the dimensions and shapes, we created 3D models using the CAD software Autodesk Alias to visualise their designs in greater detail. Additionally, basic 3D models were generated using another CAD software, Autodesk Fusion 360, specifically for the purpose of 3D printing. A Hierarchical Task Analysis was used to discuss and explore their interaction flows, and the flows were then explained in storyboards.",
    evaluate_2: "We finished our project by performing a second evaluation with users.  Three healthcare workers tried a voice user interface we had simulated with a Wizard of Oz technique. We also interviewed them about gesture-based interaction and the physical properties of our concepts. When they tested the voice user interface, they performed predefined tasks and strung beads to simulate their hands being occupied with another task, which my illustration shows. To summarise the results, the participants were positive about the physical properties. They said that the voice user interface could ease their work since they often are in situations when they can not touch their devices. Furthermore, they believed that they would be comfortable using this in front of patients and that the patients would not find the interaction too strange. However, the reactions to the gesture-based interface were mixed. Two participants said they would not be comfortable using it in front of patients, while one did not find this interaction socially strange. They thought it was a useful complement to voice control when you do not want to interrupt an ongoing conversation.",
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
    design_1: "Based on the requirements, we made two concepts called Myco Main and Myco Mini. Both focus on assisting healthcare workers in various situations by providing touchless interfaces of voice control and gesture control. When touchless interaction may not be feasible or wanted, the concepts also provide touchscreens and physical buttons. These backup interactions provide familiarity for the users, which can be needed in emergencies or when managing large amounts of data. Myco stands for My Companion and is the name Ascom uses for their smartphones.",
    design_2: "We decided to make two concepts to consider the different needs of organisations. Myco Mini is a lightweight wearable that aims to support organisations that need third-party apps, such as medical record apps. Third-party apps require devices with bigger screens, and Myco Mini is accompanied by a smartphone that supports these apps. The purpose of Myco Mini is to let the user perform the most essential call and alert actions without needing to pick up the phone. It consists of two magnetic parts, a square base and a flexible silicone band. At the front of the square base, there is a multi-function button that enables the user to perform frequently used actions by clicking on the surface. It also has a light that signals various events on the device, such as alerts and incoming phone calls.",
    design_3: "Myco Main is a small smartphone suitable for organisations that only need the main functionalities of calls and alerts. Since no third-party apps need to be supported, its screen size can be smaller, making it lighter to carry. It has a top display, similar to Ascom’s smartphone Myco 2, allowing users to access information easily by looking down at the device. If the user wants more visual information, they can tilt the phone upwards with their hand. When tilted 90 degrees, the screen flips so the user faces the interface correctly. This way, the user can access all available information quicker than removing the phone from its position and holding it in their hand.",
    design_4: "The first two images show rendered images of the concepts, and the third one shows the 3D printed models. Two of our storyboards are also included, showing how different interactions can be used to achieve the same goal.",
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
    design_images: [
        {
            key: 1,
            src: "/mini_main/Mini500.webp",
            srcSet: "/mini_main/Mini500.webp 5000w, /mini_main/Mini1000.webp 1000w, /mini_main/Mini1500.webp 1500w",
            alt: "Mini bent and flat",
            aspectRatio: "1500/694 auto",
        },
        {
            key: 2,
            src: "/mini_main/Main500.web",
            srcSet: "/mini_main/Main500.webp 5000w, /mini_main/Main1000.webp 1000w, /mini_main/Main1644.webp 1500w",
            alt: "Main different angles",
            aspectRatio: "1644/1065 auto",
        },
        {
            key: 3,
            src: "/mini_main/3dprinted500.webp",
            srcSet: "/mini_main/3dprinted500 5000w, /mini_main/3dprinted1000.webp 1000w, /mini_main/3dprinted2000.webp 1500w",
            alt: "3D-printed models",
            aspectRatio: "2000/801 auto",
        },
        {
            key: 4,
            src: "/mini_main/storyboard_1_1000.webp",
            srcSet: "/mini_main/storyboard_1_1000.webp 5000w, /mini_main/storyboard_1_1500.webp 1000w, /mini_main/storyboard_1_3000.webp 1500w",
            alt: "Storyboard 1",
            aspectRatio: "3000/1583 auto",
        },
        {
            key: 5,
            src: "/mini_main/storyboard_2_1000.webp",
            srcSet: "/mini_main/storyboard_2_1000.webp 500w, /mini_main/storyboard_2_1500.webp 1000w, /mini_main/storyboard_2_3000.webp 1500w",
            alt: "Storyboard 2",
            aspectRatio: "3000/1613 auto",
        },
    ],
    reflections: [
        {
            id: 1,
            title: "Tackle an open project",
            content: "The task we received from Ascom was very broad, which we initially thought was challenging. It was difficult to predict which departments would be the best to visit, and in the beginning, we limited the visits to high-paced departments. Even though we gathered some interesting insights at these departments, we realised that this was not such an important factor. When the project is open and broad, you have to start somewhere because defining the scope will be a part of the process.",
        },
    ]
}

export default miniMain;
