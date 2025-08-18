import { create } from "zustand";

const useUserStore = create(set => ({
    user: "",

    setUser: (userName) => set({user: userName})
}));

export default useUserStore;