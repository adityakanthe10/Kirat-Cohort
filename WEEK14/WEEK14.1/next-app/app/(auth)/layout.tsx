import React from "react";

export default function DiscountBarrier({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="p-4 border-b text-center">
        20% off for the next few days
      </div>
      {children}
    </div>
  );
}
