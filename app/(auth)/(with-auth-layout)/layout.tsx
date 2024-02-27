import React from "react";

const WithAuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Inner Layout</h2>
      {children}
    </div>
  );
};

export default WithAuthLayout;
