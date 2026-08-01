import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-6xl font-extrabold font-sans text-accent mb-4">404</h1>
        <h2 className="text-2xl font-bold font-sans text-foreground mb-6">Page Not Found</h2>
        <p className="text-muted font-mono mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="border border-zinc-700 text-foreground px-6 py-3 rounded-md font-medium hover:bg-zinc-800 transition-colors font-sans"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
