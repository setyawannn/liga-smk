import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return <div className={`${className} max-w-6xl mx-auto`}>{children}</div>;
};

export default MaxWidthWrapper;
