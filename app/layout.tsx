import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/data/site";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloqueralacadena.uy"),
  title: `${SITE.name} | Bloques de hormigón en Durazno, Uruguay`,
  description:
    "Fabricación y venta de bloques de hormigón en Durazno, Uruguay. Bloque 12, 15 y 20 cm. Entrega en zona. Consultá precios por WhatsApp.",
  keywords: [
    "bloques de hormigón Durazno",
    "fábrica de bloques Uruguay",
    "bloquera Durazno",
    "bloques construcción Durazno",
    "hormigón Uruguay",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: `${SITE.name} | Bloques de hormigón en Durazno`,
    description: "Fabricación y venta de bloques de hormigón. Entrega en Durazno y zona.",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/images/WhatsApp%20Image%202026-05-05%20at%2011.33.38.jpeg",
        width: 1200,
        height: 630,
        alt: "Bloques de hormigón Bloquera La Cadena",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bloquera La Cadena",
  image: "https://www.bloqueralacadena.uy/images/logo.jpeg",
  logo: "https://www.bloqueralacadena.uy/icon.png",
  url: "https://www.bloqueralacadena.uy",
  telephone: "+598",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durazno",
    addressCountry: "UY",
  },
  description:
    "Fabricación y venta de bloques de hormigón en Durazno, Uruguay. Bloque 12, 15 y 20 cm.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
