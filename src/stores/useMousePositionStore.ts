import { MousePosition } from '@/types';
import { create } from 'zustand';

type State = {
  position: MousePosition;
};

type Action = {
  setPosition: (position: MousePosition) => void;
};

export const useMousePositionStore = create<State & Action>((set) => ({
  position: { x: 0, y: 0 },
  setPosition: (position) => set({ position }),
}));
