"use client";

import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/components/projects.data";

export default function ProjectsPage() {
	return (
		<main className="min-h-screen bg-primary-background">
			<Navigation />

			{/* Hero Header */}
			<section className="pt-32 pb-16">
				<div className="container-custom">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">My Work</h1>
						<p className="text-xl text-primary-muted">
							Creating next level digital products
						</p>
					</motion.div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="section-padding pt-0">
				<div className="container-custom">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={project.name} project={project} index={index} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
