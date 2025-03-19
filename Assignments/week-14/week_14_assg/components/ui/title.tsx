interface Titles {
  title: string;
}

export default function Title({ title }: Titles) {
  return (
    <div className="w-full h-20  top-0 flex  items-center justiy-center">
      <div className="text-left container mx-auto px-4 ">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
