// File: src/app/get-a-quote/store/useFormStore.js
import { create } from "zustand";

export const useFormStore = create((set) => ({
  step: 1,
  formData: {},
  setStep: (step) => set({ step }),
  setFormData: (key, value) =>
    set((state) => ({
      formData: { ...state.formData, [key]: value },
    })),
}));
