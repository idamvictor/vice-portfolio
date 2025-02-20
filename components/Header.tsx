import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-6xl mx-auto px-4 flex items-center h-16 justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          Jack<span className="text-orange-500">.</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link href="/" className="text-white hover:text-orange-500">
            Home.
          </Link>
          <Link href="/about" className="text-white hover:text-orange-500">
            About.
          </Link>
          <Link href="/skills" className="text-white hover:text-orange-500">
            Skills.
          </Link>
          <Link href="/portfolio" className="text-white hover:text-orange-500">
            Portfolio.
          </Link>
          <Link href="/contact" className="text-white hover:text-orange-500">
            Contact.
          </Link>
        </nav>

        <div className="flex items-center">
          <ModeToggle /> </div>
      </div>
    </header>
  );
}
