import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: 1 | 2 | 3;
}

const STEP_LABELS = ["Velg tjeneste", "Konfigurer", "Oppsummering"];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [1, 2, 3] as const;

  return (
    <div className="flex items-center py-4 px-8 max-[480px]:px-4">
      {steps.map((step, i) => {
        const isDone = step < currentStep;
        const isActive = step === currentStep;

        return (
          <div key={step} className="contents">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-all",
                  isDone && "bg-teal-accent text-white",
                  isActive && "bg-navy-dark text-white shadow-[0_0_0_4px_rgba(14,44,64,0.08)]",
                  !isDone && !isActive && "bg-gray-100 text-navy-light/40"
                )}
              >
                {isDone ? <Check size={16} /> : step}
              </div>
              <span className={cn(
                "text-[11px] font-medium hidden sm:block",
                isActive ? "text-navy-dark" : "text-navy-light/40"
              )}>
                {STEP_LABELS[i]}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-[2px] mx-3 mb-5 sm:mb-0 transition-colors",
                  i < currentStep - 1 ? "bg-teal-accent" : "bg-gray-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
