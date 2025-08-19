import { create } from "zustand";

const useUserStore = create(set => ({
    user: [],

    isLoading: null,

    errorData: null,

    setError: (status) => set({errorData: status}),

    setLoading: (status) => set({isLoading: status}),

    setUser: (userName) => set({user: userName})
}));

export default useUserStore;