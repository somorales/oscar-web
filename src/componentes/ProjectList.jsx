import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const projects = [
    {
      title: "Designing a landing page for a real client",
      company: "RIMS Mobility",
      tags: ["Web Design", "Figma", "UI Design", "Wordpress"],
    },
    {
      title: "Helping small restaurant owners to interact with new clients",
      company: "Food Central",
      tags: ["UX Research", "Figma", "UI Design", "Design Thinking"],
    },
    {
      title: "Redesigning a site (Usability Heuristics)",
      company: "Barcelona Trips",
      tags: ["Heuristic evaluation", "Figma", "Accesibility", "Web Design"],
    },
  ];

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          company={project.company}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
