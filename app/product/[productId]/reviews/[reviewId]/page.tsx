import React from "react";
import { notFound } from "next/navigation";
const ReviewDetails = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      ReviewDetails for {params.reviewId} for product id {params.productId}
    </div>
  );
};

export default ReviewDetails;
