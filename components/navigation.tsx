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

		const handleResize = () => {
			// Close mobile menu when screen becomes larger
			if (window.innerWidth >= 768) {
				setIsOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleMenu = () => setIsOpen(!isOpen);

	const closeMenu = () => setIsOpen(false);

	return (
		<>
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
					<div className="flex items-center justify-between h-14 mobile:h-16 tablet:h-20">
						{/* Logo */}
						<Link href="/" className="flex items-center space-x-2">
							<span className="text-xl mobile:text-2xl tablet:text-3xl font-mono font-bold text-primary-accent">
								JF
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden tablet:flex items-center space-x-6 desktop:space-x-8">
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
							className="tablet:hidden p-2 text-primary-text hover:text-primary-accent transition-colors"
							aria-label="Toggle menu"
						>
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="mobile-menu-overlay"
							onClick={closeMenu}
						/>

						{/* Mobile Menu Panel */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "tween", duration: 0.3 }}
							className="mobile-menu-panel"
						>
							<div className="p-6 pt-20">
								<div className="flex flex-col space-y-6">
									{navigationItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											onClick={closeMenu}
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
					</>
				)}
			</AnimatePresence>
		</>
	);
}
