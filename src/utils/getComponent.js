import React from "react";

const getComponent = (componentPath) => {
  return React.lazy(() => import(`../components/${componentPath}`));
};

export default getComponent;
