const bookingSite = {
    title: "Resource booking site",
    about1: "This was an individual project I did in a graphical interfaces course. The task was to design an interface for booking rooms and equipment at a university, and the user group is teachers and students. Each item should hold data on name and location, and the room items should also include data on size and available equipment, such as projectors and whiteboards. A booking should hold data on who made the booking, the date and time, and whether the administrator has approved the booking.",
    about2: "A critical aspect of the booking system is managing the balance between automatic booking and manual control. For example, a teacher must book two rooms on Tuesday afternoons for three weeks. All rooms must hold at least 20 people and be within five minutes of walking distance. The teacher defines the requirements for the booking by using search and filtering mechanisms, and the system suggests a list of rooms and dates/times. The teacher reviews this and is generally satisfied, but she knows that one room is unsuitable for the occasion. Manually, she selects another room that she knows is better, which the system also shows is available.",
    posterSrcSet: "/booking_site/poster_image500.webp 500w, /booking_site/poster_image1000.webp 1000w, /booking_site/poster_image1500.webp 1500w",
    poster_image: "/booking_site/poster_image500.webp",
    details: 
        {
        role:"I did everything since it was an individual project.",
        challenge:"Design a graphical interface for booking rooms and equipment that balances automatic booking and manual control.",
        projectTime:"5 weeks, half time"
    },
    results: "I designed an interface for desktops that helps users make more complex room and equipment bookings. The result images show the refined mockup. The user does a resource search on the start page, where they can make an initial filtering. When the search component is pressed, it expands to show the filtering items, and since rooms and equipment have different filter options, they are divided into two categories. The search result has two views: a calendar view and a list view. The different views give the user flexibility to choose which view is the most suitable for their current search. In the search result, the user is offered more filter options for use cases where the search needs to be more specific. The selected resources are gathered under Selected, similar to a shopping cart in online stores. The user can overview all their bookings in Your bookings, which also has calendar and list views and filters. The purpose of the Rooms and Equipment pages is that the user can easily find information about a specific resource, such as the schedule.",
    result_images: [
        {
            id: 1, 
            url: "/booking_site/result1.webp",
            title: "Start page",
            description: "The start page of the interface."
        },
        {
            id: 2, 
            url: "/booking_site/result2.webp",
            title: "Start page - Filter 1",
            description: "The search component expands when it is pressed and shows the filter items."
        },
        {
            id: 3, 
            url: "/booking_site/result3.webp",
            title: "Start page - Filter 2",
            description: "Rooms and equipment are divided into two categories."
        },
        {
            id: 4, 
            url: "/booking_site/result4.svg",
            title: "Search calendar view",
            description: "The calendar view of the search results."
        },
        {
            id: 5, 
            url: "/booking_site/result5.svg",
            title: "Search list view",
            description: "The list view of the search results."
        },
        {
            id: 6, 
            url: "/booking_site/result6.svg",
            title: "Search - Selected",
            description: "When the icon button Selected is pressed an overlay appears with all selcted items."
        },
        {
            id: 7, 
            url: "/booking_site/result7.svg",
            title: "My bookings calendar view",
            description: "The calendar view of the Your bookings."
        },
        {
            id: 8, 
            url: "/booking_site/result8.svg",
            title: "My bookings list view",
            description: "The list view of the Your bookings."
        },
        {
            id: 9, 
            url: "/booking_site/result9.svg",
            title: "Rooms",
            description: "In Rooms the user can search for a specific room."
        },
        {
            id: 10, 
            url: "/booking_site/result10.svg",
            title: "Room information Omega",
            description: "Each room has an information page where the user can see the schedule of the room."
        },
    ],
    process_overview: [
        {
        id: "1",
        title: "User studies", 
        image:  "/research.svg",
        },
        {
        id: "2",
        title: "Wireframing", 
        image:  "/wireframe.svg",
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
        title: "User studies", 
        description: "I began the project by interviewing a teacher about what information and features they think are essential when booking rooms. The answers complemented the requirements in the project description. The teacher said, among other things, that including pictures of the rooms in the room description and being able to save favourites would be helpful. They also mentioned that it would be useful if all users could see who had made a booking so that you could contact them for a potential switch of classrooms. In addition to the small interview, I looked at existing interfaces for inspiration, such as AirBnb and Google Calendar.",
        images: ""
        },
        {
        id: "2",
        title: "Wireframing", 
        description: "To explore user flows and layouts, I made wireframes in Figma. When the user flow and layout were decided, I made wireframes of all views in the interface. I spent much time wireframing, so the wireframes were elaborated and populated with all actual data except images.",
        images: "/booking_site/wireframe.svg"
        },
        {
        id: "3",
        title: "Prototype", 
        description: "An interactive prototype was made in Figma based on the wireframes. I used Figma components and variants to facilitate potential design changes. Due to lack of time, I mainly focused on interactivity rather than further development of the aesthetics of the interface elements. Therefore, I later did a second iteration of the design, where I made a mockup of the interface. This mockup is intended to make the interface more aesthetically pleasing.",
        images: "/booking_site/prototype.svg"
        },
    ],
    reflections: "During this project, I underestimated how long prototyping takes. This resulted in high fidelity regarding interactivity, but the prototype was too similar to the wireframes. In future projects, I will plan the time for each task better to achieve more uniform fidelity throughout the design.",
}

export default bookingSite;
