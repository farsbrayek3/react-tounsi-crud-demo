// Magasin Zustand simple pour gérer l'utilisateur connecté
import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null, // l'utilisateur (null par défaut)
  setUser: (user) => set({ user }), // fonction pour modifier l'utilisateur
}));

export default useUserStore;
