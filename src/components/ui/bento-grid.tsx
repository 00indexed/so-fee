import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export function BentoGrid({
  className,
  children,
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  Icon?: React.ElementType;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  background?: React.ReactNode;
  className?: string;
}

export function BentoCard({
  Icon,
  name,
  description,
  href,
  cta,
  background,
  className,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border bg-white p-5 shadow-sm transition-all hover:shadow-md dark:bg-gray-950 h-full flex flex-col",
        className
      )}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {Icon && (
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 p-1.5 shadow-sm dark:bg-gray-800">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <h3 className="mb-1.5 font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        {href && cta && (
          <Link
            href={href}
            className="mt-3 inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            {cta}
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
      </div>
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity group-hover:opacity-100">
        {background}
      </div>
    </div>
  );
}
