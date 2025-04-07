import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";

const RankList = ({ users }) => {
  return (
    <Box>
      {users.map((user, index) => (
        <Paper key={user.id} sx={{ display: 'flex', p: 2, mb: 1, alignItems: 'center' }}>
          <Typography sx={{ width: 30, fontWeight: 'bold' }}>
            #{user.rank}
          </Typography>
          <Avatar src={user.avatar} sx={{ mx: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>{user.name}</Typography>
          <Typography>{user.points.toLocaleString()} pts</Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default RankList;
