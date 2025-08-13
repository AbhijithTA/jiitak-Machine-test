"use client";
import { create } from "zustand";

type AuthState = {
  loading: boolean;
  error?: string;
  setLoading: (b:boolean)=>void;
  setError: (m?:string)=>void;
};

export const useAuth = create<AuthState>((set)=>({
  loading: false,
  error: undefined,
  setLoading: (b)=>set({loading:b}),
  setError: (m)=>set({error:m}),
}));
