import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import TransitLine from "./components/TransitLine";
import Station from "./components/Station";
import RouteBullet from "./components/RouteBullet";

import { LINES } from "./lib/mta";
import rolesData from "./data/roles.json";
import projectsData from "./data/projects.json";

interface RoleEntry {
  title: string;
  company: string;
  timeline: string;
  link: string;
  image: string;
  /** opt-in pulsing "NOW" marker */
  live?: boolean;
}

interface ProjectEntry {
  title: string;
  description: string;
  link: string;
  image: string;
  skills?: string[];
  /** opt-in pulsing "NOW" marker */
  live?: boolean;
}

export default function HomePage() {
  const roles: RoleEntry[] = rolesData.roles;
  const projects: ProjectEntry[] = projectsData.projects;

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="map" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10 sm:px-6">
          {/* map title block, styled like a transit-map legend */}
          <Reveal>
            <div className="mb-10 flex flex-col gap-3 border-b border-[color:var(--color-paper-line)] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Shane Chen Transit System
                </p>
                <h2 className="mt-1 text-3xl font-bold tracking-tight">The Map</h2>
              </div>
              <div className="flex items-center gap-5 text-sm text-neutral-600">
                <span className="flex items-center gap-2">
                  <RouteBullet line={LINES.career} size={24} /> Roles
                </span>
                <span className="flex items-center gap-2">
                  <RouteBullet line={LINES.build} size={24} /> Projects
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-14 lg:flex-row lg:gap-12">
            <Reveal className="flex-1">
              <TransitLine line={LINES.career} label="Roles" count={roles.length} id="roles">
                {roles.map((role) => (
                  <Station
                    key={role.title + role.company}
                    line={LINES.career}
                    title={role.title}
                    subtitle={role.company}
                    meta={role.timeline}
                    link={role.link}
                    image={role.image}
                    live={role.live}
                  />
                ))}
              </TransitLine>
            </Reveal>

            <Reveal className="flex-1" delay={120}>
              <TransitLine line={LINES.build} label="Projects" count={projects.length} id="projects">
                {projects.map((project) => (
                  <Station
                    key={project.title}
                    line={LINES.build}
                    title={project.title}
                    subtitle={project.description}
                    link={project.link}
                    image={project.image}
                    transfers={project.skills}
                    live={project.live}
                  />
                ))}
              </TransitLine>
            </Reveal>
          </div>

          <p className="mt-12 text-center text-sm text-neutral-600">
            More projects run express on my{" "}
            <a
              href="https://www.github.com/mars-flat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline decoration-2 underline-offset-4"
              style={{ textDecorationColor: "var(--color-line-blue)" }}
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
