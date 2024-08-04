import UnAuthHeader from "@/components/layout/header/un-auth/un-auth";
import LandingPage from '@/components/pages/landing/landing'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <UnAuthHeader></UnAuthHeader>
      <LandingPage type='teacher' />
    </main>
  );
}
