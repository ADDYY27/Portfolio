import { useState } from "react";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "../data/content";

export default function Work() {
  const [activeDetail, setActiveDetail] = useState(null);

  return (
    <section id="work" className="px-8 py-24">
      {/* Section heading */}
      <FadeIn className="flex items-baseline gap-4 mb-14">
        <span
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="text-[10px] uppercase tracking-[0.2em] text-[#5a5448]"
        >
          02
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize:   "clamp(26px, 3vw, 38px)",
            fontWeight: 400,
          }}
          className="text-[#f5f0e8]"
        >
          Selected Projects
        </h2>
      </FadeIn>

      {/* 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onOpenDetail={(key) => setActiveDetail(key)}
          />
        ))}
      </div>

      {/* Modal — renders when a detailKey is active */}
      {activeDetail && (
        <ProjectModal
          detailKey={activeDetail}
          onClose={() => setActiveDetail(null)}
        />
      )}
    </section>
  );
}
