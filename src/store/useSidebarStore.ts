import { create } from 'zustand';

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true, // open by default
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
