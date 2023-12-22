const digitalRecords = {
    title: "Portable, digital medical record",
    about: "I did this project as my bachelor’s thesis, and we made it in collaboration with the company Predicare and the psychiatric emergency department at Östra Sjukhuset. The group consisted of six members with backgrounds in Software Engineering, Industrial Design Engineering and Computer Science and Engineering. The psychiatric emergency department at Östra Sjukhuset uses a paper journal to handle patient meetings, and this journal includes Predicare’s product RETTS, which stands for Rapid Emergency Triage and Treatment System. RETTS helps healthcare workers assess patients’ need for healthcare. The project aimed to develop a digital version of the paper journal to help healthcare workers fill in all vital patient information. We made several design iterations during the project based on continuous user studies and evaluations. The design process resulted in an implementation of the application.",
    poster_image: "/digital_records/poster_image.svg",
    project_poster_src: "/digital_records/project_poster500.png 500w, /digital_records/project_poster1000.png 1000w, /digital_records/project_poster1500.png 1500w",
    details: 
        {
        role:"Planning the design process, UI design, exhibition poster.",
        challenge:"Many fields in the paper journal are regularly skipped or missed, and thus, the journal cannot provide adequate information about a patient’s health.",
        projectTime:"18 weeks, half time"
    },
    results: "We designed and implemented a portable, digital medical record that is used on tablets. The digital medical record includes all data fields that the original paper journal had and some new functionalities to facilitate the workflow. These functionalities are a quick switch between different patients’ records, warnings if a user skips a compulsory field and a summary view of a patient’s record. The data fields are distributed between several pages, which increases the visual clarity and decreases the users’ mental workload when not all information is presented simultaneously. The user is free to fill out the fields in the order suitable for each patient meeting.",
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
        title: "Prototype", 
        image:  "/prototype_digital.svg",
        },
        {
        id: "5",
        title: "Evaluate", 
        image:  "/evaluate.svg",
        },
        
    ],
    design_process: [
        {
        id: "1",
        title: "User studies", 
        description: "During the project, we had close contact with the psychiatric emergency department, and thus, we were able to do several user studies. All group members visited the emergency department in pairs, where we observed patient meetings and conducted unstructured interviews with the healthcare workers. After making all the visits, we participated in a workshop with the healthcare workers and Predicare. The purpose of the workshop was to synchronise the different parties’ needs, wishes and views of the project. Neither during the visits nor the workshop was a doctor available for an interview. Therefore, we supplemented the previous user studies with an interview with a doctor to get their perspective on the usage situation.",
        images: [""]
        },
        {
        id: "2",
        title: "Analyse data", 
        description: "All the gathered data was organised in an affinity diagram, giving us a clear view of the current situation. Many fields in the paper journal are regularly skipped or missed, partly because much information is communicated verbally instead. Some of the often skipped fields must be filled in by law. Therefore, the department managers expressed a wish that these would be mandatory to fill out in the application. We also saw that the paper journal is filled out dynamically instead of from top to bottom. It was also clear that the paper journal had different functionality depending on who was using it.",
        images: ["/digital_records/affinity.jpg"]
        },
        {
        id: "3",
        title: "Ideate", 
        description: "After visiting the emergency department for the first time, we started to generate ideas because we wanted to get some early feedback at the workshop. After the workshop, we did a new ideation based on the feedback we had received. We used the method of Braindrawing to ideate and then the method of Sticky decision to investigate which ideas we thought had potential.",
        images: ["/digital_records/ideate.jpg"]
        },
        {
        id: "4",
        title: "Prototype", 
        description: "We did some basic Figma prototypes of the early ideas we showed at the workshop. During our second iteration, another group member and I made an extensive prototype of the final design in Figma, which included all the different application pages. In parallel, the other group members implemented the application according to the Figma prototype. The application was built for Android tablets and written in Kotlin with the Jetpack Compose framework.",
        images: ["/digital_records/prototype.svg"]
        },
        {
        id: "5",
        title: "Evaluate", 
        description: "We could evaluate ideas frequently since we had continuous contact with the users. The project ended with a final evaluation of the design. In this evaluation, the users performed predefined tasks using the Figma prototype. The execution of the tasks was followed by an interview of the users’ experience, and they were also asked to fill out a semantic differential scale. The design was well received by the healthcare staff, who were optimistic about the digitisation of the paper journal. Most of the identified problems were related to new functionalities and concepts that did not exist in the paper journal.",
        images: ["/digital_records/semantic.svg"]
        },
    ],
    reflections: [
        {
            id: 1,
            title: "Benefits of cross-functional teams",
            content: "This was the first project where I collaborated with people with a different educational background than me, and I learned many new ways to approach tasks from my group members. They also taught me aspects to consider when designing an interface that someone will implement.",
        },
        {
            id: 2,
            title: "Drawbacks of early ideation",
            content: "We started to ideate early in the process to get early feedback on the workshop. However, we realized that this resulted in us getting stuck in our old ideas during our next iteration instead of coming up with new ideas. In the best of worlds, we would have two planned workshops, the first for data gathering and the second for showing the ideas.",
        },
    ]
}

export default digitalRecords;
