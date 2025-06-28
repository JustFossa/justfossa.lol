"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const skillsMarquee = [
	"Websites",
	"Designing",
	"Graphics",
	"Animations",
	"Community",
	"Development",
	"Mentor",
];

const socialLinks = [
	{
		icon: Twitter,
		href: "https://x.com/JustFossa",
		label: "X",
	},
	{ icon: Github, href: "https://github.com/justfossa", label: "GitHub" },
	{ icon: Mail, href: "mailto:hello@justfossa.lol", label: "Email" },
];

export default function HeroSection() {
	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden">
			<div className="container-custom">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						{/* Main Headline */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
						>
							Crafting purpose driven experiences that{" "}
							<span className="text-gradient">inspire & engage</span>
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="text-lg md:text-xl text-primary-muted max-w-2xl"
						>
							I'm a self-taught software engineer from the Czech Republic. I'm
							currently pursuing full-stack web development to create stunning
							user experiences on the front-end, and scalable and secure
							infrastructure on the backend.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="flex flex-col sm:flex-row gap-4"
						>
							<Link
								href="/projects"
								className="button-primary inline-flex items-center justify-center"
							>
								View My Work
							</Link>
							<Link
								href="/about"
								className="button-secondary inline-flex items-center justify-center"
							>
								Know me better
							</Link>
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 }}
							className="flex items-center space-x-4"
						>
							{socialLinks.map((social) => (
								<Link
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="p-2 text-primary-muted hover:text-primary-accent transition-colors duration-200"
									aria-label={social.label}
								>
									<social.icon size={20} />
								</Link>
							))}
						</motion.div>
					</motion.div>

					{/* Right Content - Skills Marquee */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						<div className="marquee-container">
							<div className="marquee-content flex space-x-8">
								{[...skillsMarquee, ...skillsMarquee].map((skill, index) => (
									<span
										key={index}
										className="text-2xl md:text-3xl font-bold text-primary-muted whitespace-nowrap"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Background Elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-accent/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl"></div>
			</div>
		</section>
	);
}
