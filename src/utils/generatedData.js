const generateRandomData = () => {
    const data = [];
    for (let day = 1; day <= 30; day++) {
      const requests = Math.floor(Math.random() * (1000 - 700 + 1)) + 700;
      const eligible = requests - Math.floor(Math.random() * (100 - 50 + 1)) + 50;
      data.push({ day, requests, eligible });
    }
    return data;
  };
  
 export const data = generateRandomData();