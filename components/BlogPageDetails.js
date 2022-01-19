import React from "react";

export default function BlogPageDetails({ memory }) {
  const { title, youTubeEmbedUrl } = memory.fields;
  return (
    <div className="pt-16 space-y-8 md:space-x-4 lg:space-x-8 max-w-3xl w-11/12 mx-auto ">
      <div className="relative h-96 w-full  overflow-hidden">
        <h2 className="text-2xl pb-8">{title}</h2>

        <iframe
          className="rounded-2xl overflow-hidden"
          width="560"
          height="315"
          src={youTubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
