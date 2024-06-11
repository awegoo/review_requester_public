export async function getDates() {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() + 5);
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 30);
  
    const startDateString = startDate.toISOString().slice(0, 10);
    const endDateString = endDate.toISOString().slice(0, 10);
  
    return { startDateString, endDateString };
  }