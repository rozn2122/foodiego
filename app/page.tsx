import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantGrid from "@/components/RestaurantGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <RestaurantGrid />
    </main>
  );
}