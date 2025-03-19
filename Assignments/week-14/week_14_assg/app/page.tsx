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
      <div className="w-full h-20  top-0 flex items-center justiy-center pt-20">
        <div className="text-left container mx-auto  max-w-2xl ">
          <p>🖱️ Client Page: Interactive client-side rendering in action</p>
          <p>&#128640;Server Page: Optimized static content for SEO</p>
        </div>
      </div>
    </div>
  );
}
