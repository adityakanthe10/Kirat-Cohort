interface Titles {
  title: string;
}

export default function Title({ title }: Titles) {
  return (
    <div>
      <div className="w-full h-20  top-0 flex  items-center justiy-center pt-40">
        <div className="text-left container mx-auto  max-w-2xl ">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
