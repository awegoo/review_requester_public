import { create } from "zustand";

const useAuthStore = create((set) => ({
  //value for loading
  isLoadingPage: true,
  setIsLoadingPage: (isLoading) =>
    set(() => ({ isLoadingPage: isLoading })),

  //value for month in blocks and chart
  currentMonth: new Date().getMonth(),
  setCurrentMonth: (month) => set({ currentMonth: month }),
  

  //value for year in blocks and chart
  currentYear: new Date().getFullYear(),
  setCurrentYear: (year) => set({ currentYear: year }),
}));

export { useAuthStore };
