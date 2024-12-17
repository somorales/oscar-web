import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const projects = [
    {
      title: "Designing a landing page for a real client",
      company: "RIMS Mobility",
      tags: ["Web Design", "Figma", "UI Design", "Wordpress"],
      link: "https://www.behance.net/gallery/195697201/UI-Design-Portfolio-Landing-Page"
    },
    {
      title: "Helping small restaurant owners to interact with new clients",
      company: "Food Central",
      tags: ["UX Research", "Figma", "UI Design", "Design Thinking"],
      link: "https://www.behance.net/gallery/195274971/UXUI-Design-Portfolio-FoodCentral"
    },
    {
      title: "Redesigning a site (Usability Heuristics)",
      company: "Barcelona Trips",
      tags: ["Heuristic evaluation", "Figma", "Accesibility", "Web Design"],
      link:"https://www.behance.net/gallery/195601121/UI-Design-Portfolio-Landing-Page"
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
          link= {project.link}
        />
      ))}
    </div>
  );
}
