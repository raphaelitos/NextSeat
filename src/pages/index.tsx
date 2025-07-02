import { Geist } from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}
    grid grid-rows-[20px_1fr_20px] items-center justify-items-center
    min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]`} >    
    </div>
  );
}