import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";

export default function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Title title={"Welcome to Static Page"} />
      </div>
      <div className="">
        <p>
          This paragraph right here is rendered statically using Next.js. By
          generating the content on the server at build time, Next.js ensures
          that search engines can easily crawl and index this page, boosting its
          SEO. Plus, serving static content leads to faster load times and a
          smoother user experience. And if I need interactivity, Next.js allows
          me to use the &quot;use client&quot; directive for specific
          components.
        </p>
        <p>
          Pretty cool, right? Now navigate to the Client Page to check how
          interactivity is added in Next.js!
        </p>
      </div>
    </div>
  );
}
