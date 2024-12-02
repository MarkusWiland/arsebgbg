import Image from "next/image";
import HeroSection from "./sections/hero";
import GoldBorder from "./_components/goldBorder";
import PostsSection from "./sections/posts";

export default function Home() {
  return (
    <div className="relative">
    <HeroSection />
    
    <GoldBorder />
      <PostsSection />
      <GoldBorder />
    </div>
  );
}
