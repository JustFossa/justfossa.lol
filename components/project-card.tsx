"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export type Project = {
	name: string;
	repoUrl: string;
	cover: string;
	tags: string[];
};

export function ProjectCard({
	project,
	index,
}: {
	project: Project;
	index: number;
}) {
	return (
		<motion.div
			key={project.name}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="group"
		>
			<Link
				href={project.repoUrl}
				className="block"
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className="relative overflow-hidden rounded-lg bg-primary-card card-hover">
					<div className="aspect-[4/3] relative overflow-hidden">
						<Image
							src={project.cover}
							alt={project.name}
							fill
							className="object-cover transition-transform duration-300 group-hover:scale-110"
						/>
						<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
					<div className="p-4 mobile:p-6">
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-responsive-sm font-semibold text-primary-text">
								{project.name}
							</h3>
						</div>
						<div className="flex flex-wrap gap-1 mobile:gap-2 mb-2">
							{project.tags.map((tag) => (
								<span
									key={tag}
									className="text-xs bg-primary-background/50 text-primary-muted px-2 py-1 rounded"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
