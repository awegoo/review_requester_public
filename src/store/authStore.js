import { create } from "zustand";


const useAuthStore = create((set) => ({
  isLoadingPage: true,
  setIsLoadingPage: (isLoading) =>
    set(() => ({ isLoadingPage: isLoading })),
}));

export { useAuthStore };