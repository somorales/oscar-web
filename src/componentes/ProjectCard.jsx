export default function ProjectCard(props) {
  const { title, company, tags } = props;

  return (
    <div className="bg-[#F4F4F5] rounded-3xl p-8 mb-4 flex items-center justify-between">
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{company}</p>
      </div>

      <div className="flex items-center gap-4">
      <div className="flex flex-wrap gap-2 max-w-64 justify-start">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-[#F4D06F] rounded-full text-sm inline-block whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="text-2xl text-gray-900  hover:text-[#52B6B9] font-bold hover:underline mx-8">
          More info
        </a>
      </div>
    </div>
  );
}
