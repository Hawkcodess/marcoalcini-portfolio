'use client'

import Tilt from 'react-parallax-tilt'

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProjectCard({ project, onClick }) {
  return (
    <Tilt
      tiltMaxAngleDegrees={8}
      scale={1.02}
      transitionSpeed={400}
      className="h-full"
    >
      <div
        onClick={onClick}
        className="cursor-pointer rounded-2xl overflow-hidden border border-[#E5E5E5] bg-white group h-full flex flex-col"
      >
        {/* Colored top area */}
        <div className={`relative h-48 bg-gradient-to-br ${project.color} flex-shrink-0`}>
          <span
            className="absolute top-4 right-4 text-7xl font-bold leading-none select-none pointer-events-none"
            style={{ color: 'rgba(255,255,255,0.08)' }}
          >
            {String(project.id).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <span className="font-body text-xs uppercase tracking-widest text-[#6B7280]">
            {project.category}
          </span>
          <h3 className="font-heading text-2xl font-light mt-1 text-[#111111]">
            {project.title}
          </h3>
          <p className="font-body text-sm text-[#6B7280] mt-2 leading-relaxed line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-xs text-[#6B7280] bg-[#F5F5F5] px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow on hover */}
          <div className="flex justify-end mt-4">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#6B7280]">
              <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  )
}
