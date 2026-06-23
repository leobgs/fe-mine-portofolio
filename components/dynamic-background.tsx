"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";

export function DynamicBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 3000], ["0%", "8%"]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden select-none pointer-events-none bg-background">
      <motion.div
        style={{
          y: bgY,
          backgroundImage: isDark
            ? "url('/bg-dark.webp')"
            : "url('/bg-light.webp')",
        }}
        // Tinggi di HP dibuat 120% dan di laptop 150% agar gambar tidak terlalu "ter-zoom/gepeng" di layar HP (yang vertikal).
        // Menggunakan persen (%) lebih aman di HP daripada vh untuk menghindari bug address bar di browser HP.
        className="absolute top-0 left-0 w-full h-[120%] md:h-[150%] bg-cover bg-center transition-colors duration-700 ease-in-out"
      />
    </div>
  );
}
