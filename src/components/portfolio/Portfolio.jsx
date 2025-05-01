import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "CRM Web",
    img: "./crm.jpg",
    desc: "The Customer Relationship Management (CRM) project is a fully dynamic web application designed to manage and streamline interactions with customers, leads, and prospects. It includes modules for customer data management, lead tracking, communication history, sales pipeline management, and analytics. The project is dynamic, meaning all data is managed through a backend system and presented in real-time. It enhances business productivity, • Fully dynamic Ul  Built using modern tech stack: React, TypeScript, and •",
    demoLink:"https://demo.scaleup-business-builder.xyz",
    githubLink: "https://github.com/lucidcraft-in/crm-web.git"
    
  },
  {
    id: 2,
    title: "shopsy",
    img: "./shopzy.jpg",
    desc: "Built a fully responsive e-commerce website using React, Tailwind CSS, and AOS animations, featuring a mobile-friendly design and optimized component architecture for seamless user experience• Developed a fully responsive e-commerce website clone using React for the front end and Tailwind CSS for styling.• Integrated AOS (Animate On Scroll) for smooth animations to enhance user experience.• Designed a pixel-perfect, mobile-friendly Ul to ensure cross-device compatibility.• Implemented optimized component structures for scalability and maintainability.",
    demoLink:"https://shoppingkartt.netlify.app/"
  },
  {
    id: 3,
    title: "Todo-App",
    img: "./todo.jpg",
    desc: "Built with React Native (Expo) and Firebase for user authentication.Developed a To-Do Management application that enables users to register with email and password, log in with their credentials, and securely manage tasks. Key features include the ability to add, update, and delete tasks, as well as mark tasks as completed.",
    githubLink:"https://github.com/abh486/todoapp.git"
  },
  {
    id: 4,
    title: "car repair",
    img: "./repair.jpg",
    desc: "Built with: React, useState• Developed a ToDo Management application that allows users to add, update, and delete tasks. Utilized useState to manage task states dynamically, enhancing skills in state management and React fundamentals.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
