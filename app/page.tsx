import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExpertiseSection from "@/components/expertise-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-primary-background">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ExpertiseSection />
		</main>
	);
}
