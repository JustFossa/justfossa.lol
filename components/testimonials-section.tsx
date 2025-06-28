"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
	{
		id: 1,
		name: "Vritika Naik",
		role: "Regional Head",
		company: "GirlScript",
		avatar:
			"https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
		quote:
			"I am amazed at JustFossa's ability to create intriguing designs. At GirlScript, JustFossa not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate. His deliveries were always very well executed before time. His energy towards work is commendable.",
	},
	{
		id: 2,
		name: "Amrit Raj",
		role: "Senior Developer",
		company: "Ignite Solutions",
		avatar:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
		quote:
			"I had the pleasure of collaborating with JustFossa on a project where his exceptional UI/UX skills truly shone. JustFossa's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it comes to creating intuitive and visually appealing interfaces.",
	},
	{
		id: 3,
		name: "Divya Walia",
		role: "Senior Java Developer",
		company: "Nagarro",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
		quote:
			"I am writing to highly recommend JustFossa for any Java fullstack role. I have had the pleasure of working with JustFossa for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. JustFossa played a pivotal role in building the application.",
	},
	{
		id: 4,
		name: "Elavarasan Muthuvalavan",
		role: "Technical Lead",
		company: "Ignite Solutions",
		avatar:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
		quote:
			"I had the pleasure of working alongside JustFossa, who is an exceptional professional with an impressive command of Angular Templates, and CSS3. Beyond his technical prowess, what truly sets JustFossa apart is his keen observational skills and ability to ask relevant questions that elevate the entire team.",
	},
	{
		id: 5,
		name: "Gaurav Kerkar",
		role: "Software Engineer",
		company: "OneShield",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
		quote:
			"I highly recommend JustFossa for anyone seeking a talented software engineer with a strong expertise in Angular. His profound understanding of UI development has consistently elevated our projects. Diligent, collaborative, and always delivering top-notch solutions, JustFossa is an asset to any team.",
	},
];

export default function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);
	};

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
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
					<p className="text-xl text-primary-muted">What others say</p>
				</motion.div>

				{/* Testimonials Carousel */}
				<div className="relative max-w-4xl mx-auto">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5 }}
						className="bg-primary-card p-8 md:p-12 rounded-2xl"
					>
						{/* Quote Icon */}
						<div className="flex justify-center mb-6">
							<div className="w-12 h-12 bg-primary-accent/10 rounded-full flex items-center justify-center">
								<Quote className="w-6 h-6 text-primary-accent" />
							</div>
						</div>

						{/* Quote Text */}
						<blockquote className="text-lg md:text-xl text-primary-text text-center mb-8 leading-relaxed">
							"{testimonials[currentIndex].quote}"
						</blockquote>

						{/* Author Info */}
						<div className="flex items-center justify-center space-x-4">
							<div className="w-16 h-16 rounded-full overflow-hidden bg-primary-accent/10">
								<img
									src={testimonials[currentIndex].avatar}
									alt={testimonials[currentIndex].name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="text-center">
								<h4 className="font-semibold text-primary-text">
									{testimonials[currentIndex].name}
								</h4>
								<p className="text-sm text-primary-muted">
									{testimonials[currentIndex].role} @{" "}
									{testimonials[currentIndex].company}
								</p>
							</div>
						</div>
					</motion.div>

					{/* Navigation Buttons */}
					<div className="flex justify-center space-x-4 mt-8">
						<button
							onClick={prevTestimonial}
							className="w-12 h-12 rounded-full bg-primary-card border border-primary-border flex items-center justify-center text-primary-text hover:text-primary-accent hover:border-primary-accent transition-colors"
							aria-label="Previous testimonial"
						>
							<ChevronLeft size={20} />
						</button>
						<button
							onClick={nextTestimonial}
							className="w-12 h-12 rounded-full bg-primary-card border border-primary-border flex items-center justify-center text-primary-text hover:text-primary-accent hover:border-primary-accent transition-colors"
							aria-label="Next testimonial"
						>
							<ChevronRight size={20} />
						</button>
					</div>

					{/* Dots Indicator */}
					<div className="flex justify-center space-x-2 mt-6">
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === currentIndex
										? "bg-primary-accent"
										: "bg-primary-border hover:bg-primary-muted"
								}`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
