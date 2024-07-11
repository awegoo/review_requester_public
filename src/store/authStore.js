import { create } from "zustand";


const useAuthStore = create((set) => ({
  //value for loading
  isLoadingPage: true,
  setIsLoadingPage: (isLoading) =>
    set(() => ({ isLoadingPage: isLoading })),

  //value for date in blocks and chart
  currentMonth: 0,
  setCurrentMonth: (month) => set({ currentMonth: month }),
}));

export { useAuthStore };