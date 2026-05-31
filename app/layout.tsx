import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helium — Open-source analyst layer for your database",
  description:
    "Ask your database questions in plain English, inspect generated queries, run safe read-only operations, and get trusted answers. Start with MySQL. Extend to any database through adapters.",
  keywords: [
    "Helium",
    "open source",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "AI analyst",
    "MySQL",
    "database",
    "natural language queries",
    "self-hosted",
    "adapter",
    "data analyst",
  ],
  openGraph: {
    title: "Helium — Open-source analyst layer for your database",
    description:
      "Ask your database questions in plain English. Inspect the query. Get trusted answers. Self-hostable, adapter-first, MIT-licensed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
