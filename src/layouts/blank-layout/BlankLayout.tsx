import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  return (
    <>
      <div
        className="page-wrap"
        style={{
          display: "flex",
          top: "0px",
          right: "0px",
          left: "0px",
          bottom: "0px",
          backgroundColor: "#000000",
          borderRadius: 0,
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default BlankLayout;
