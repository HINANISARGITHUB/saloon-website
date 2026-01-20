import React from "react";


const Video = () => {
  return (
   <div className="w-full mt-12 lg:mt-24">
  <iframe
    className="w-full aspect-video"
    src="https://www.youtube.com/embed/mXK-HH_hUL8?autoplay=1&mute=1&loop=1&playlist=mXK-HH_hUL8&controls=0&rel=0&modestbranding=1&fs=0&iv_load_policy=3"
    title="Aiman khan signature makeup by sana sara's"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen={false}
  ></iframe>
</div>

  );
};

export default Video;
