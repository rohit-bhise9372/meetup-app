const { initializeDatabase } = require("../db/db.connect");
const Event = require("../models/event.model");

initializeDatabase();

const meetupData = [
  {
    title: "React Beginners Meetup",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    date: "20 Sept 2026",
    time: "10:00 AM - 1:00 PM",
    speaker: "Aman Verma",
    topic: "React Fundamentals",
    description:
      "Learn React basics, components, props, state and build your first project with live coding.",
    venue: "Pune Tech Hub",
    address: "Hinjewadi Phase 2, Pune",
    price: 299,
    dressCode: "Casual",
    ageRestriction: "16+",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    title: "Node.js Backend Workshop",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    date: "22 Sept 2026",
    time: "7:00 PM - 9:00 PM",
    speaker: "Priya Sharma",
    topic: "Express & MongoDB APIs",
    description:
      "Build REST APIs using Express, MongoDB and learn CRUD operations from scratch.",
    venue: "Zoom",
    address: "Online Event",
    price: 0,
    dressCode: "Any",
    ageRestriction: "15+",
    tags: ["Node", "Express", "MongoDB"],
  },
  {
    title: "UI/UX Design Meetup",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "25 Sept 2026",
    time: "11:00 AM - 2:00 PM",
    speaker: "Neha Kulkarni",
    topic: "Design Thinking & Accessibility",
    description:
      "Discover modern UI/UX principles, accessibility and practical Figma workflows.",
    venue: "Viman Nagar Community Hall",
    address: "Viman Nagar, Pune",
    price: 199,
    dressCode: "Smart Casual",
    ageRestriction: "18+",
    tags: ["UI", "UX", "Figma", "Accessibility"],
  },
  {
    title: "AI for Web Developers",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "28 Sept 2026",
    time: "6:30 PM - 8:30 PM",
    speaker: "Rohit Nair",
    topic: "Integrating AI into React Apps",
    description:
      "Learn how developers use AI APIs, chat interfaces and modern AI workflows in web apps.",
    venue: "Google Meet",
    address: "Online Event",
    price: 149,
    dressCode: "Any",
    ageRestriction: "16+",
    tags: ["AI", "React", "OpenAI", "JavaScript"],
  },
  {
    title: "DevOps & Docker Bootcamp",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    date: "2 Oct 2026",
    time: "10:00 AM - 3:00 PM",
    speaker: "Siddharth Patil",
    topic: "Docker & Deployment",
    description:
      "Hands-on session covering Docker, containers, images and deploying Node applications.",
    venue: "Innovate Labs",
    address: "Baner, Pune",
    price: 399,
    dressCode: "Casual",
    ageRestriction: "18+",
    tags: ["Docker", "DevOps", "Deployment"],
  },
  {
    title: "Python Automation Meetup",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    date: "5 Oct 2026",
    time: "7:00 PM - 9:00 PM",
    speaker: "Sneha Joshi",
    topic: "Automation with Python",
    description:
      "Automate repetitive tasks using Python scripts, file handling and web automation.",
    venue: "Microsoft Teams",
    address: "Online Event",
    price: 99,
    dressCode: "Any",
    ageRestriction: "15+",
    tags: ["Python", "Automation", "Scripting"],
  },
  {
    title: "Startup Networking Evening",
    type: "Offline",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    date: "8 Oct 2026",
    time: "5:30 PM - 8:30 PM",
    speaker: "Multiple Founders",
    topic: "Networking & Startup Stories",
    description:
      "Meet founders, developers and designers while listening to real startup journeys.",
    venue: "WorkNest Coworking",
    address: "Koregaon Park, Pune",
    price: 0,
    dressCode: "Business Casual",
    ageRestriction: "18+",
    tags: ["Startup", "Networking", "Career"],
  },
  {
    title: "Full Stack Career Roadmap 2026",
    type: "Online",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    date: "12 Oct 2026",
    time: "8:00 PM - 9:30 PM",
    speaker: "Harsh Agrawal",
    topic: "From Beginner to Full Stack Developer",
    description:
      "A complete roadmap covering HTML, CSS, React, Node, MongoDB, Git and interview preparation.",
    venue: "YouTube Live",
    address: "Online Event",
    price: 0,
    dressCode: "Any",
    ageRestriction: "No Restriction",
    tags: ["Career", "React", "Node", "Full Stack"],
  },
];

async function seedData() {
  try {
    await Event.deleteMany();
    await Event.insertMany(meetupData);

    console.log("8 Meetup events inserted successfully.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

seedData();