import React from "react";
import { Pagination } from "@mui/material";

const CustomPagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(_, page) => setCurrentPage(page)}
      color="primary"
      sx={{ mt: 2, display: "flex", justifyContent: "center" }}
    />
  );
};

export default CustomPagination;
