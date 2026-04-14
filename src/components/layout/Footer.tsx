import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-raised/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/casabliss_logo_onlyCB-removebg.png"
              alt="Casa Bliss"
              width={96}
              height={96}
              className="w-auto h-16 object-contain"
              style={{ width: "auto", height: "64px" }}
            />
          </Link>

          {/* Contact */}
          <div className="flex items-center gap-8 text-sm text-cream/60">
            <a
              href="https://wa.me/919999999999?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Casa%20Bliss."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors duration-300"
            >
              WhatsApp
            </a>
            <span className="w-px h-4 bg-raised" />
            <a
              href="mailto:hello@casabliss.in"
              className="hover:text-gold transition-colors duration-300"
            >
              hello@casabliss.in
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-8 border-t border-raised/20 text-center">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Casa Bliss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
