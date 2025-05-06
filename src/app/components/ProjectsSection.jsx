"use client";
import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import client from "../../sanity/lib/client";

const query = `
  *[_type == "project"] {
    _id,
    title,
    description,
    techStack,
    repoUrl,
    "image": image.asset->url,    
  }
`

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  console.log(client)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await client.fetch(query)
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      }
    }

    fetchProjects();
  }, []);

  console.log(projects)

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              repoUrl={project.repoUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
