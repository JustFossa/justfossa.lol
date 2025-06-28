"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-primary-background/80 backdrop-blur-md border-b border-primary-border"
					: "bg-transparent"
			}`}
		>
			<div className="container-custom">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-2xl md:text-3xl font-mono font-bold text-primary-accent">
							JF
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigationItems.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`text-sm font-medium transition-colors duration-200 ${
									pathname === item.href
										? "text-primary-accent"
										: "text-primary-text hover:text-primary-accent"
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 text-primary-text hover:text-primary-accent transition-colors"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-primary-background border-t border-primary-border"
					>
						<div className="container-custom py-4">
							<div className="flex flex-col space-y-4">
								{navigationItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										onClick={() => setIsOpen(false)}
										className={`text-lg font-medium transition-colors duration-200 ${
											pathname === item.href
												? "text-primary-accent"
												: "text-primary-text hover:text-primary-accent"
										}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
