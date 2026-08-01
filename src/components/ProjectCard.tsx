import { Project } from "@/data/projects";

export default function ProjectCard({ title, description, tags, link, image }: Project) {
  return (
    <div className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 h-full">
      {/* Image Placeholder or actual Image */}
      <div className="h-48 w-full bg-zinc-800/50 border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <span className="text-muted font-mono text-sm tracking-widest uppercase opacity-50">
            {title} Preview
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold font-sans text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2 font-sans">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono font-medium text-foreground bg-zinc-800/50 rounded border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-zinc-800/50">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
          >
            <span>View Project</span>
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
