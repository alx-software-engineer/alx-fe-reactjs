import { create } from "zustand";

const useUserStore = create(set => ({
    user: null,

    isLoading: false,

    errorData: null,

    setError: (status) => set({errorData: status}),

    setLoading: (status) => set({isLoading: status}),

    setUser: (userData) => set({user: userData})
}));

export default useUserStore;