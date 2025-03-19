import CounterButton from "@/components/ui/counter-button";
import Navbar from "@/components/ui/navbar";
import Title from "@/components/ui/title";

export default function Interactive() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Title title={"Welcome to Interactive Page"} />
      </div>
      <div className="w-full h-20  top-0 flex  items-center justiy-center pt-40">
        <div className="text-left container mx-auto  max-w-2xl ">
          <p>
            This route features a count button that demonstrates the power of
            client-side interactivity in Next.js. Click the button and see the
            count go up! This interactive feature is powered by the &quot;use
            client&quot; directive in Next.js, which allows this component to be
            rendered on the client-side.
          </p>
          <br />
          <CounterButton />
        </div>
      </div>
    </div>
  );
}
