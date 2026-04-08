import Link from "next/link";
import { Header } from "@/components/ui/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-khaki-light flex items-center justify-center pt-20">
        <div className="text-center px-6 max-w-lg">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-earth mb-4">
            404
          </h1>
          <p className="text-xl md:text-2xl text-earth/70 mb-8">
            This page doesn&apos;t exist or has been moved.
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-earth text-khaki-light rounded-lg font-semibold hover:bg-earth/90 transition-colors"
            >
              Go Home
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border border-earth text-earth rounded-lg font-semibold hover:bg-earth/5 transition-colors"
            >
              Read Blog
            </Link>
            <Link
              href="/apply"
              className="px-8 py-3 border border-earth text-earth rounded-lg font-semibold hover:bg-earth/5 transition-colors"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}
