import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      isEditing: false,
      homeData: [
        {
          title: "Welcome to !8Holes",
          description: "Your ultimate golf experience starts here.",
          btn: "Explore",
          bgImg: "  ",
        },
      ],
      setIsEditing: (value) => set({ isEditing: value }),
      setHomeData: (value) =>
        set((state) => ({
          homeData: state.homeData.map((item, index) =>
            index === 0 ? { ...item, ...value } : item
          ),
        })),
    }),
    {
      name: "homeData-storage",
    }
  )
);

export default useStore;
