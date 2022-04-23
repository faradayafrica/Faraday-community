import React from "react";

function SkeletonLoader({
  upComingEvent,
  pastEvent,
  speakers,
  schedule,
  gallery,
}) {
  return (
    <>
      {pastEvent && (
        <div className="grid md:grid-cols-3 gap-3">
          {Array(3)
            .fill()
            .map((_, i) => (
              <div key={i} className="animate-pulse odd:bg-[#F1F2F6] py-8">
                <div className="gap-12">
                  <div className="w-full h-[300px] bg-gray-300"></div>

                  <div className="animate-pulse space-y-3 my-3 w-full">
                    <div className="w-[60%] h-[20px] bg-[#0000003d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000003d] rounded mt-3"></div>
                    <div className="w-full h-[10px] bg-[#0000003d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                    <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {upComingEvent &&
        Array(4)
          .fill()
          .map((_, i) => (
            <div key={i} className="animate-pulse odd:bg-[#F1F2F6] py-8">
              <div className="container md:flex gap-12">
                <div className="w-full md:w-[400px] h-[200px] bg-gray-300"></div>

                <div className="animate-pulse space-y-3 my-3 w-full">
                  <div className="w-[60%] h-[20px] bg-[#0000003d] rounded"></div>
                  <div className="w-[70%] h-[10px] bg-[#0000003d] rounded mt-3"></div>
                  <div className="w-full h-[10px] bg-[#0000003d] rounded"></div>
                  <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                  <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                  <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                  <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                  <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                </div>
              </div>
            </div>
          ))}

      {speakers &&
        Array(2)
          .fill()
          .map((_, i) => (
            <div key={i} className="animate-pulse space-y-2">
              <div className="w-[150px] h-[150px] bg-[#0000003d] rounded"></div>
              <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
              <div className="w-[60%] h-[10px] bg-[#0000005d] rounded"></div>
            </div>
          ))}

      {schedule &&
        Array(3)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse pb-4 border-gray-400 border-b-2 last:border-0"
            >
              <div className="space-y-4 ml-3">
                <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                <div className="w-full h-[10px] bg-[#0000005d] rounded"></div>
                <div className="w-[60%] h-[10px] bg-[#0000005d] rounded"></div>
              </div>
            </div>
          ))}

      {gallery &&
        Array(20)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="animate-pulse w-full h-[150px] md:h-full bg-[#0000005d] rounded"
            ></div>
          ))}
    </>
  );
}

export default SkeletonLoader;
