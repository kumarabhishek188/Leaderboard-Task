const users = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    points: Math.floor(Math.random() * 1000000),
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`, // Optional avatar
  }));
  
  // Sort descending by points
  users.sort((a, b) => b.points - a.points);
  
  export default users;
  