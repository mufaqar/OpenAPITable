import React from "react";

import { APIComponentsMap } from "../APIComponentsMap";

export const APIContentSection = () => {
  return (
    <div id="api-contents" className="my-8">
      <div className="my-8 2xl:max-w-[1344px] mx-auto w-full max-2xl:px-4">
        <p className="text-h2 text-core-blue mb-[40px]">API Contents</p>
        <APIComponentsMap />
      </div>
    </div>
  );
};
