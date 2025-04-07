import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

const TopThree = ({ users }) => {
  return (
    <Box display="flex" justifyContent="space-around" mb={4}>
      {users.map((user, index) => (
        <Box key={user.id} textAlign="center">
          <Avatar
            src={user.avatar}
            sx={{
              width: 80,
              height: 80,
              margin: "auto",
              border: `4px solid ${medalColors[index]}`,
            }}
          />
          <Typography fontWeight="bold" mt={1}>
            {user.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user.points.toLocaleString()} pts
          </Typography>
          <Typography variant="h6" color="primary">
            #{index + 1}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TopThree;
