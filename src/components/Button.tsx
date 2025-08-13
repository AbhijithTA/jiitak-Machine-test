"use client";
import clsx from "clsx";
import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & { loading?: boolean };
export default function Button({ className, loading, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={clsx(
        "w-full rounded-pill py-3 px-6 text-white text-base font-medium transition",
        "bg-brand-primary hover:brightness-105 disabled:opacity-50",
        className
      )}
    >
      {loading ? "..." : children}
    </button>
  );
}
