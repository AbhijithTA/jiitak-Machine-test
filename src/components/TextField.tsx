"use client";
import { useState } from "react";

export default function TextField({
  label, type="text", placeholder, value, onChange,
  error, hint, toggleablePassword
}:{
  label: string; type?: string; placeholder?: string;
  value: string; onChange: (v: string)=>void;
  error?: string; hint?: string; toggleablePassword?: boolean;
}) {
  const [show, setShow] = useState(false);
  const actualType = toggleablePassword ? (show ? "text" : "password") : type;
  return (
    <div className="w-full">
      <label className="block mb-1 text-sm">{label}</label>
      <div className="flex items-stretch border rounded-md bg-white">
        <input
          className="flex-1 px-3 py-2 outline-none bg-transparent"
          type={actualType} placeholder={placeholder} value={value}
          onChange={(e)=>onChange(e.target.value)}
        />
        {toggleablePassword && (
          <button type="button" onClick={()=>setShow(v=>!v)} className="px-3 text-sm">
            {show ? "非表示" : "表示"}
          </button>
        )}
      </div>
      {hint && <p className="text-xs text-gray-500 mt-1">{hint}</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
