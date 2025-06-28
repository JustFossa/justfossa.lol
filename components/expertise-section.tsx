"use client";

import { motion } from "framer-motion";
import { Code, Palette, Users } from "lucide-react";

const expertiseAreas = [
	{
		title: "Development",
		icon: Code,
		description: "Full-stack web development with modern technologies",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React.js",
			"Next.js",
			"Angular",
			"Redux",
			"Node.js",
			"Express.js",
			"MySQL",
			"MongoDB",
			"PostgreSQL",
			"Cypress",
			"Docker",
			"Firebase",
			"AWS",
			"GSAP",
			"Framer Motion",
			"Figma",
			"Tailwind CSS",
			"GIT",
		],
	},
	{
		title: "UI/UX Design",
		icon: Palette,
		description: "Creating beautiful and intuitive user experiences",
		skills: [
			"User Research",
			"Wireframing",
			"Prototyping",
			"Visual Design",
			"Interaction Design",
			"Design Systems",
			"Accessibility",
			"Responsive Design",
			"Figma",
			"Adobe Creative Suite",
			"Sketch",
			"InVision",
		],
	},
	{
		title: "Branding",
		icon: Users,
		description: "Building strong brand identities and communities",
		skills: [
			"Brand Strategy",
			"Logo Design",
			"Visual Identity",
			"Brand Guidelines",
			"Community Building",
			"Social Media",
			"Content Creation",
			"Marketing",
			"Event Organization",
			"Mentorship",
			"Leadership",
		],
	},
];

export default function ExpertiseSection() {
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
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Speciality</h2>
					<p className="text-xl text-primary-muted">Areas of Expertise</p>
				</motion.div>

				{/* Expertise Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{expertiseAreas.map((area, index) => (
						<motion.div
							key={area.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="bg-primary-card p-8 rounded-2xl card-hover h-full">
								{/* Icon */}
								<div className="w-16 h-16 bg-primary-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-accent/20 transition-colors duration-300">
									<area.icon className="w-8 h-8 text-primary-accent" />
								</div>

								{/* Title */}
								<h3 className="text-2xl font-bold text-primary-text mb-4">
									{area.title}
								</h3>

								{/* Description */}
								<p className="text-primary-muted mb-6 leading-relaxed">
									{area.description}
								</p>

								{/* Skills Grid */}
								<div className="grid grid-cols-2 gap-2">
									{area.skills.slice(0, 8).map((skill) => (
										<div
											key={skill}
											className="text-sm text-primary-muted bg-primary-background/50 px-3 py-1 rounded-md"
										>
											{skill}
										</div>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
