"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "./projects.data";

export default function ProjectsSection() {
	return (
		<section className="section-padding">
			<div className="container-custom">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
					<p className="text-xl text-primary-muted mb-8">Selected Projects</p>
					<p className="text-lg text-primary-muted max-w-2xl mx-auto">
						Here's a curated selection showcasing my expertise and the achieved
						results.
					</p>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={project.name} project={project} index={index} />
					))}
				</div>

				{/* View All Projects Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<a
						href="/projects"
						className="button-secondary inline-flex items-center"
					>
						View All Projects
					</a>
				</motion.div>
			</div>
		</section>
	);
}
