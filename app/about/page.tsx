import Navigation from "@/components/navigation";
import AboutContent from "@/components/about-content";

export default function AboutPage() {
	return (
		<main className="min-h-screen bg-primary-background">
			<Navigation />
			<div className="pt-14 mobile:pt-16 tablet:pt-20">
				<AboutContent />
			</div>
		</main>
	);
}
