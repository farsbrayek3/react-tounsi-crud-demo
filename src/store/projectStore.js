import { create } from "zustand";

const useProjectStore = create((set) => ({
  project: null,
  setProject: (project) => set({ project }),
}));

export default useProjectStore;
