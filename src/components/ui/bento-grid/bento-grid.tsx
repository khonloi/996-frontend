import React from "react";

type BentoShape = "large" | "wide" | "small" | "tall";

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: BentoShape;
  children: React.ReactNode;
}

export const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  ({ shape, children, className = "", ...props }, ref) => {
    // Determine the column and row span classes based on the requested shape.
    // By default (mobile), all cards span 1 column (stack vertically).
    // On md (tablet), they snap into a 2-column grid.
    // On lg (desktop), they snap into the defined 5-column grid layout.
    const shapeClasses = {
      large: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
      wide: "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
      small: "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
      tall: "md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2", // on tablet, tall spans 2 columns
    }[shape];

    return (
      <div
        ref={ref}
        className={`relative rounded-xl overflow-hidden ${shapeClasses} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);
BentoCard.displayName = "BentoCard";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={`w-full max-w-7xl mx-auto p-4 md:p-6 ${className}`}>
        <div className="@container">
          <div
            ref={ref}
            className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 
              gap-4 md:gap-6
              auto-rows-[minmax(250px,auto)]
              md:auto-rows-[calc((100cqw-1.5rem)/2)] 
              lg:auto-rows-[calc((100cqw-6rem)/5)]
            "
            {...props}
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
BentoGrid.displayName = "BentoGrid";
