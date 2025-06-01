import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", () => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>JustFossa</title>
				<meta name="description" content="JustFossa - Software Engineer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black" />
				<meta
					name="keywords"
					content="justfossa, justfossa web dev, web developer, typescript, github, react, next.js, javascript, full stack developer"
				/>
				<meta name="apple-mobile-web-app-title" content="JustFossa" />
				<meta name="application-name" content="JustFossa" />
				<link rel="icon" href="/favicon.ico" />
				<script
  defer
  data-website-id="6834bd1a6dfc89393bc5146b"
  data-domain="justfossa.lol"
  src="https://datafa.st/js/script.js">
</script>
			</Head>
			<main>
				<div className="min-h-screen w-full  dark:bg-black flex flex-col items-center">
					<Navbar />
					<div className="w-[80%] md:w-[45rem]">
						<AnimatePresence mode="wait">
							<Component {...pageProps} />
						</AnimatePresence>
						<Footer />
					</div>
				</div>
			</main>
		</>
	);
}
