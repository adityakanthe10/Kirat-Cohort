export const BlogSkeleton = () => {
  return (
    <div role="status" className="max-w-screen-md animate-pulse cursor-pointer">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-4 w-4 bg-gray-200 rounded-full  mb-4"></div>
          <div className="ml-2 flex flex-col justify-center">
            <div className="h-4 bg-gray-200 rounded-full mb-2 w-32"></div>
            <div className="h-3 bg-gray-200 rounded-full w-24"></div>
          </div>
        </div>
        {/* <div className="h-6 bg-gray-200 rounded-full mb-2 w-3/4"></div> */}
        <div className="h-6 mt-2 bg-gray-200 rounded-full mb-2 w-2/3"></div>
        <div className="h-6 bg-gray-200 rounded-full mb-2 w-5/6"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BlogSkeleton;
