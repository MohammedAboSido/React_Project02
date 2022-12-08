import React from "react";

export default function OurSponsorsComponent({ img, alt }) {
  return (
    <div>
      <img width="100%" src={img} alt={alt} />
    </div>
  );
}
