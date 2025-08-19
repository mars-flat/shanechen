import React from "react";
import { theme } from '../theme';
import Image from "next/image";

interface RoleCardProps {
  title: string;
  company: string;
  timeline: string;
  link: string;
  image: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, company, timeline, link, image }) => (
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
      <div className={theme.tw.textGray700 + " text-sm"}>{company}</div>
      <div className={theme.tw.textGray500 + " text-xs"}>{timeline}</div>
    </div>
  </a>
);

export default RoleCard;
