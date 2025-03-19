import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Title title={"Welcome to Home Page"} />
      </div>
      <div className="">
        <p>Client Page: Interactive client-side rendering in action</p>
        <p>Server Page: Optimized static content for SEO</p>
      </div>
    </div>
  );
}
