import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  {
    if (params.slug.length === 2) {
      return (
        <h4>
          Viewing docs for feature {params.slug[0]} and concept for{" "}
          {params.slug[1]}
        </h4>
      );
    } else if (params.slug.length === 1) {
      return <h4>Viewing docs for feature {params.slug[0]}</h4>;
    } else {
      return <div>Docs</div>;
    }
  }
};

export default Docs;
