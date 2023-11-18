import React from "react";
import { Outlet } from "react-router-dom";

import { ChangedBlock, Map } from "src/components";

const ContentLayout = () => {
  return (
    <>
      <Map />
      <ChangedBlock>
        <Outlet />
      </ChangedBlock>
    </>
  );
};

export default ContentLayout;
