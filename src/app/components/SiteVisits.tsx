import { useEffect, useState } from "react";

export default function SiteVisits() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem("totalSiteVisits");
    const newCount = storedVisits ? parseInt(storedVisits, 10) + 1 : 1;

    localStorage.setItem("totalSiteVisits", newCount.toString());
    setVisits(newCount);
  }, []);

  return (
    <div className="hidden md:flex flex-col items-center justify-center
                    px-3 py-1 mr-4
                    bg-white border border-gray-200
                    rounded-lg shadow-sm">
      <span className="text-[10px] text-gray-500 leading-none">
        Total Visits
      </span>
      <span className="text-sm font-bold text-blue-600 leading-tight">
        {visits}
      </span>
    </div>
  );
}