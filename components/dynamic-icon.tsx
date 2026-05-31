import * as icons from "lucide-react";
import { type LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (icons as any)[name] as React.ComponentType<LucideProps> | undefined;
  if (!IconComponent) {
    return <span className="inline-block w-4 h-4" />;
  }
  return <IconComponent {...props} />;
}
