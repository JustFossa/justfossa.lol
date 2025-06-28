"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
	const glitchedText =
		"I'm JustFossa, with over 5+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.";

	return (
		<section className="section-padding relative">
			<div className="container-custom">
				<div className="grid-responsive-1-2 gap-responsive items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6 mobile:space-y-8"
					>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							viewport={{ once: true }}
							className="text-responsive-xl font-bold"
						>
							About Me
						</motion.h2>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							viewport={{ once: true }}
							className="space-y-4"
						>
							<p className="text-responsive-base text-primary-muted leading-relaxed">
								{glitchedText}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							viewport={{ once: true }}
							className="flex flex-wrap gap-4"
						>
							<div className="bg-primary-card p-4 rounded-lg">
								<h3 className="text-2xl font-bold text-primary-accent">5+</h3>
								<p className="text-sm text-primary-muted">Years Experience</p>
							</div>
							<div className="bg-primary-card p-4 rounded-lg">
								<h3 className="text-2xl font-bold text-primary-accent">50+</h3>
								<p className="text-sm text-primary-muted">Projects Completed</p>
							</div>
							<div className="bg-primary-card p-4 rounded-lg">
								<h3 className="text-2xl font-bold text-primary-accent">100%</h3>
								<p className="text-sm text-primary-muted">
									Client Satisfaction
								</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Content - Image/Visual */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="aspect-square bg-gradient-to-br from-primary-accent/20 to-primary-accent/5 rounded-2xl p-8">
							<div className="grid grid-cols-2 gap-4 h-full">
								<div className="space-y-4">
									<div className="bg-primary-card p-4 rounded-lg">
										<h4 className="font-semibold text-primary-accent">
											Frontend
										</h4>
										<p className="text-sm text-primary-muted">
											React, Next.js, TypeScript
										</p>
									</div>
									<div className="bg-primary-card p-4 rounded-lg">
										<h4 className="font-semibold text-primary-accent">
											Backend
										</h4>
										<p className="text-sm text-primary-muted">
											Node.js, Express, Databases
										</p>
									</div>
								</div>
								<div className="space-y-4">
									<div className="bg-primary-card p-4 rounded-lg">
										<h4 className="font-semibold text-primary-accent">
											Design
										</h4>
										<p className="text-sm text-primary-muted">
											UI/UX, Figma, Prototyping
										</p>
									</div>
									<div className="bg-primary-card p-4 rounded-lg">
										<h4 className="font-semibold text-primary-accent">Tools</h4>
										<p className="text-sm text-primary-muted">
											Git, Docker, AWS
										</p>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
