const names = [
    "Abhishek", "Sneha", "Rohan", "Priya", "Aryan", "Meera", "Kunal", "Anjali", "Dev", "Riya",
    "Aman", "Neha", "Ishaan", "Kriti", "Sahil", "Tanya", "Varun", "Diya", "Kabir", "Simran"
  ];
  
  const usersData = Array.from({ length: 100 }, (_, i) => {
    const name = names[i % names.length] + " " + (i + 1);
    return {
      id: i + 1,
      name,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      points: Math.floor(Math.random() * (2000000 - 100000 + 1)) + 100000
    };
  });
  
  export default usersData;
  