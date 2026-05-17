import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shwet Singh | Full-Stack Developer & Former SDE Intern @ Amazon',
  description:
    'SDE Portfolio of Shwet Singh. B.Tech Student in Electronics and Communication Engineering at IIIT Jabalpur. Former Software Development Engineer Intern at Amazon. Codeforces Specialist & LeetCode Peak 1931.',
  keywords: [
    'Shwet Singh',
    'Full Stack Developer',
    'Former SDE Intern @ Amazon',
    'IIIT Jabalpur',
    'Competitive Programming',
    'LeetCode 1931',
    'Codeforces Specialist',
    'Software Engineer Portfolio',
    'React',
    'Next.js',
    'Three.js',
  ],
  authors: [{ name: 'Shwet Singh' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#030305] text-zinc-100">{children}</body>
    </html>
  );
}
