import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export const HoverEffect = ({
  items,
  className,
  columns,
}: {
  items: {
    title: string;
    subtitle?: string;
    description: string;
    link: string;
    icon?: string;
  }[];
  className?: string;
  columns?: 3 | 4;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 py-4 text-lg",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary block rounded-xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="relative">
            <div className="flex flex-row gap-2">
              {item.icon && <CardIcon src={item.icon} />}
              <CardTitle className={cn(item.icon && "")}>
                {item.title}
              </CardTitle>
              {item.subtitle && (
                <p className="text-md font-extralight ml-auto">
                  {item.subtitle}
                </p>
              )}
            </div>
            <CardDescription className="mt-2">
              {item.description}
            </CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full overflow-hidden bg-black border border-white/[0.2] group-hover:border-primary relative z-20 p-6",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "flex flex-row items-center gap-2 text-xl font-bold tracking-wide",
        className
      )}
    >
      {children}
      <FaExternalLinkAlt className="scale-75" />
    </h3>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("tracking-wide leading-relaxed font-light", className)}>
      {children}
    </p>
  );
};

export const CardIcon = ({
  className,
  src,
}: {
  className?: string;
  src: string;
}) => {
  return (
    <Image
      src={src}
      alt="icon"
      width={128}
      height={128}
      className={cn("rounded-lg w-8", className)}
    />
  );
};
