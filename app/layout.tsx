import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://justfossa.app"),
	title: "JustFossa - Software Engineer & Developer",
	description:
		"Self-taught software engineer from the Czech Republic. Passionate about full-stack web development, creating stunning user experiences, and building scalable infrastructure.",
	keywords: [
		"software engineer",
		"web developer",
		"full-stack",
		"Czech Republic",
		"React",
		"Next.js",
		"TypeScript",
	],
	authors: [{ name: "JustFossa" }],
	creator: "JustFossa",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://justfossa.app",
		title: "JustFossa - Software Engineer & Developer",
		description:
			"Self-taught software engineer from the Czech Republic. Passionate about full-stack web development.",
		siteName: "JustFossa Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "JustFossa - Software Engineer & Developer",
		description:
			"Self-taught software engineer from the Czech Republic. Passionate about full-stack web development.",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<head>
			 <Script
	          data-site-id="a0TqGZUrQclWDZGZ"
	          data-domain="justfossa.app"
	          src="https://cdn.engagetrack.net/sdk.js"
	          strategy="afterInteractive"
	        />
			</head>
			<body
				className={`${inter.className} bg-primary-background text-primary-text antialiased`}
			>
				{children}
				
			</body>
		</html>
	);
}
