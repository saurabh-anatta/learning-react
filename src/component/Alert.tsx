import React, { ReactNode } from "react";
type props = {
  children: ReactNode;
};

const Alert = ({ children }: props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
