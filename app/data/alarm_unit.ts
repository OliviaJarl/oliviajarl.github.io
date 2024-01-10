const alarmUnit = {
    title: "Alarm monitoring & control unit",
    about: "This was a group project where we analysed the cognitive aspects of a human-machine system used by expert operators. We chose to study the human-machine system on a larger ship’s bridge, and the task navigation was selected as a delimiter to make the analysis viable. The co-navigator and navigator are the core operators of the bridge and control almost all aspects of navigation. Since the usual people in these roles are either captains, chief officers or second officers, these have been the focus during the project. Several cognitive aspects were analysed during the project, and the analyses were based on literature and user studies. Some cognitive aspects analysed were automation, attention, vigilance, mental workload, mental models and errors.",
    poster_image: "/alarm_unit/poster_image500.webp",
    posterSrcSet: "/alarm_unit/poster_image500.webp 500w, /alarm_unit/poster_image1000.webp 1000w, /alarm_unit/poster_image1500.webp 1500w",
    fading_image: "/alarm_unit/fading.svg",

    details: 
        {
        role:"We did almost everything together except for dividing the report writing among us.",
        challenge:"Study a complex human-machine system where the users are experts.",
        projectTime:"9 weeks half time"
    },
    results1: "The project resulted in a 64-page long report containing analyses of cognitive aspects of the work at a ship’s bridge. The images below show some of the results. The first image shows a system model, which visualises the whole human-machine system, the sub-systems, and the surrounding socio-technical system. The following image shows a Hierarchical Task Analysis (HTA) we made, and an HTA breaks down complex tasks into smaller, feasible tasks.",
    results2: "The last two images show the design proposal we did at the end of the project, and it is worth mentioning that designing the interface was only 10% of the project. The design proposal is a touchscreen interface displaying a collection of all active and previous alarms of the bridge. Two identical screens will be located at the centre of the bridge to allow both the navigator and co-navigator to interact with the system. The placement can be seen in the top image, which ",
    results3: "The interface's main page displays a visualization of the bridge and a collection of all active alarms. To show the alarm, the affected component will be displayed in colour corresponding to the urgency. Below the visualization, the active alarms are divided based on urgency. The operator can either deactivate an alarm so it no longer shows or mute it, which keeps the alarm active, but its sound will disappear. The alarm history page contains lists of all previous and deactivated alarms.",
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
        title: "Prototype", 
        image:  "/prototype_digital.svg",
        },   
    ],
    design_process: [
        {
        id: "1",
        title: "Literature studies", 
        description: "In this project, we applied several concepts within cognitive ergonomics to our chosen human-machine system. Therefore, literature studies were necessary to improve our understanding of the concepts. For example, we read about Wickens' resource model, situation awareness, bottom-up and top-down processing and distribution of cognitive processes. We also needed to read up on the methods, such as Applied Cognitive Task Analysis (ACTA) and NASA Task Load Index (NASA-TLX).",
        images: ""
        },
        {
        id: "2",
        title: "User studies", 
        description: "The first user study was a visit to the Chalmers Maritime Simulators at campus Lindholmen. We interviewed a last-year student in the nautical science programme, who also explained the different parts of the bridge and showed how to use the bridge by starting a simulation. The second user study was a visit to the bridge of Stena Danica, as it travelled between Gothenburg and Frederikshavn and back. On this visit, observations were gathered, followed by interviews with the crew, including the captain and the chief officer. During the last user study, we performed ACTA and NASA-TLX methods with the help of two nautical science students.",
        images: "/alarm_unit/user_studies.webp"
        },
        {
        id: "3",
        title: "Prototype", 
        description: "At the end of the project, we should make a design proposal for safer and more effective human use. Since the system is very big, we needed to focus on a smaller aspect of the bridge. We chose to work with the alarms at the bridge because several operators testified to alarm problems for many different reasons. We made a digital interface in Figma, and a 3D model was also made to render the interface in the right context.",
        images: ""
        },
    ],
    reflections: [
        {
            id: 1,
            title: "Methods can make the complex less complicated",
            content: "Using methods can sometimes take time and effort. However, many of the methods we used were useful in structuring the collected data and helping us understand the human-machine system in depth. In addition, some methods provided us with questions we wouldn't have come up with ourselves, leading to better data collection.",
        },
        {
            id: 2,
            title: "Reach out",
            content: "We depended on finding expert users for this project, and we had no first contact who worked at larger ships. Luckily, people are helpful. Our classmate helped us come in contact with students in the nautical science programme. To study a bridge on a real ship, we reached out to Stena Line, and they made it possible for us to visit the bridge at Stena Danica. All the users we met were very committed, and they let us ask very many questions.",
        },
    ]
}

export default alarmUnit;
