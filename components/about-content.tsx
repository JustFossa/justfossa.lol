"use client";

import { motion } from "framer-motion";
import { Clock, Award, Users, Code, Palette, Zap } from "lucide-react";

const workHistory = [
	{
		period: "2025 - Present",
		title: "Junior Developer",
		company: "Ideacomp s.r.o",
		description:
			"Working on various projects for clients and company's own projects.",
	},
	{
		period: "2021 - Present",
		title: "Software Engineer",
		company: "Freelance",
		description:
			"Working on various projects, including web applications, mobile apps, and design systems.",
	},
];

const designProcess = [
	{
		number: "01",
		title: "Strategize",
		description: "Planning and details discussion",
		icon: Clock,
	},
	{
		number: "02",
		title: "Wireframe",
		description: "Ideas to paper",
		icon: Code,
	},
	{
		number: "03",
		title: "Design",
		description: "Adding visual elements",
		icon: Palette,
	},
	{
		number: "04",
		title: "Development",
		description: "Making it functional",
		icon: Zap,
	},
	{
		number: "05",
		title: "Quality Assurance",
		description: "Optimization and testing",
		icon: Award,
	},
];

export default function AboutContent() {
	return (
		<>
			{/* Hero Header */}
			<section className="pt-32 pb-16">
				<div className="container-custom">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center max-w-4xl mx-auto"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							A creative developer & digital designer
						</h1>
						<p className="text-xl text-primary-muted">
							Global collaboration for impactful websites
						</p>
					</motion.div>
				</div>
			</section>

			{/* Work History */}
			<section className="section-padding">
				<div className="container-custom">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-center mb-16"
					>
						Work History
					</motion.h2>

					<div className="max-w-4xl mx-auto space-y-8">
						{workHistory.map((job, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="bg-primary-card p-8 rounded-2xl"
							>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
									<h3 className="text-2xl font-bold text-primary-text">
										{job.title}
									</h3>
									<span className="text-primary-accent font-medium">
										{job.period}
									</span>
								</div>
								<p className="text-primary-accent mb-2">{job.company}</p>
								<p className="text-primary-muted">{job.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Design Process */}
			<section className="section-padding bg-primary-card/50">
				<div className="container-custom">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-center mb-16"
					>
						Design Process
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
						{designProcess.map((step, index) => (
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="w-16 h-16 bg-primary-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<step.icon className="w-8 h-8 text-primary-accent" />
								</div>
								<div className="text-4xl font-bold text-primary-accent mb-2">
									{step.number}
								</div>
								<h3 className="text-xl font-semibold text-primary-text mb-2">
									{step.title}
								</h3>
								<p className="text-primary-muted">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
