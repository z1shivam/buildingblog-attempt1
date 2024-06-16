import EmailSignupForm from "@/components/EmailSignupForm";
import HeroHome from "@/components/HeroHome";
import LatestPosts from "@/components/LatestPosts";

export default function Home() {
  return (
    <main className="text-lg w-full">
      <HeroHome />
      <LatestPosts />
      <EmailSignupForm />
    </main>
  );
}
