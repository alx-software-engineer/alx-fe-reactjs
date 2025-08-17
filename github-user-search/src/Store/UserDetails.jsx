import { create } from "zustand";

const useUserStore = create(set => ({
    user: [],

    addUser: (userName) => set({user: userName})
}));

export default useUserStore;