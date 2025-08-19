import React from "react";
import { theme } from '../theme';
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  skills?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image, skills }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex p-4 rounded-xl shadow-lg border-l-4 border-[${theme.cardAccent}] ${theme.cardAccentHover} ${theme.cardBgBorder} transition duration-200 hover:scale-105 hover:shadow-2xl relative`}
    style={{ boxShadow: theme.accentShadowTrans }}
  >
    <Image
      src={"/" + image}
      alt={title + " logo"}
      width={64}
      height={64}
      className="w-16 h-16 object-cover rounded-lg absolute top-4 right-4 flex-shrink-0"
      style={{ zIndex: 1 }}
    />
    <div className="flex-1 min-w-0 pr-20">
      <div className={theme.tw.textGray900 + " font-semibold text-lg"}>{title}</div>
      <div className={theme.tw.textGray700 + " text-sm"}>{description}</div>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded font-medium border border-purple-200">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  </a>
);

export default ProjectCard;
