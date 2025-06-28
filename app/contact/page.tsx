"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	Instagram,
	Send,
} from "lucide-react";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "hello@justfossa.lol",
		href: "mailto:hello@justfossa.lol",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+420 774 052 900",
		href: "tel:+420774052900",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "Czech Republic",
		href: "#",
	},
];

const socialLinks = [
	{
		icon: Linkedin,
		title: "LinkedIn",
		href: "https://linkedin.com/in/justfossa",
	},
	{
		icon: Github,
		title: "GitHub",
		href: "https://github.com/justfossa",
	},
	{
		icon: Instagram,
		title: "Instagram",
		href: "https://instagram.com/justfossa",
	},
];

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							Let's create your next big idea
						</h1>
						<p className="text-xl text-primary-muted">Available for work</p>
					</motion.div>
				</div>
			</section>

			{/* Contact Content */}
			<section className="section-padding pt-0">
				<div className="container-custom">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8"
						>
							<div>
								<h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
								<p className="text-primary-muted">
									I'm always open to discussing new projects, creative ideas, or
									opportunities to be part of your visions.
								</p>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-primary-text mb-2"
										>
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 bg-primary-card border border-primary-border rounded-lg text-primary-text placeholder-primary-muted focus:outline-none focus:border-primary-accent transition-colors"
											placeholder="Your name"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-primary-text mb-2"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-3 bg-primary-card border border-primary-border rounded-lg text-primary-text placeholder-primary-muted focus:outline-none focus:border-primary-accent transition-colors"
											placeholder="your@email.com"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-primary-text mb-2"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 bg-primary-card border border-primary-border rounded-lg text-primary-text placeholder-primary-muted focus:outline-none focus:border-primary-accent transition-colors"
										placeholder="Project inquiry"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-primary-text mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={6}
										className="w-full px-4 py-3 bg-primary-card border border-primary-border rounded-lg text-primary-text placeholder-primary-muted focus:outline-none focus:border-primary-accent transition-colors resize-none"
										placeholder="Tell me about your project..."
									/>
								</div>

								<button
									type="submit"
									className="button-primary inline-flex items-center space-x-2"
								>
									<Send size={20} />
									<span>Send Message</span>
								</button>
							</form>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="space-y-8"
						>
							<div>
								<h2 className="text-3xl font-bold mb-4">Contact Information</h2>
								<p className="text-primary-muted">
									Feel free to reach out through any of these channels.
								</p>
							</div>

							{/* Contact Details */}
							<div className="space-y-6">
								{contactInfo.map((info) => (
									<a
										key={info.title}
										href={info.href}
										className="flex items-center space-x-4 p-4 bg-primary-card rounded-lg hover:bg-primary-accent/10 transition-colors"
									>
										<div className="w-12 h-12 bg-primary-accent/10 rounded-lg flex items-center justify-center">
											<info.icon className="w-6 h-6 text-primary-accent" />
										</div>
										<div>
											<h3 className="font-semibold text-primary-text">
												{info.title}
											</h3>
											<p className="text-primary-muted">{info.value}</p>
										</div>
									</a>
								))}
							</div>

							{/* Social Links */}
							<div>
								<h3 className="text-xl font-semibold text-primary-text mb-4">
									Follow Me
								</h3>
								<div className="flex space-x-4">
									{socialLinks.map((social) => (
										<a
											key={social.title}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className="w-12 h-12 bg-primary-card rounded-lg flex items-center justify-center text-primary-muted hover:text-primary-accent hover:bg-primary-accent/10 transition-colors"
											aria-label={social.title}
										>
											<social.icon size={20} />
										</a>
									))}
								</div>
							</div>

							{/* Availability Status */}
							<div className="bg-primary-card p-6 rounded-lg">
								<h3 className="text-xl font-semibold text-primary-text mb-2">
									Availability
								</h3>
								<p className="text-primary-muted mb-4">
									I'm currently available for freelance work and full-time
									opportunities.
								</p>
								<div className="flex items-center space-x-2">
									<div className="w-3 h-3 bg-semantic-success rounded-full"></div>
									<span className="text-sm text-primary-muted">
										Available for work
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
