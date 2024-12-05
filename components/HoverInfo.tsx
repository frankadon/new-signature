import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface HoverInfoProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const HoverInfo = ({ title, description, icon }: HoverInfoProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="flex gap-2 items-center">
          {title} {icon}
        </div>
      </HoverCardTrigger>
      <HoverCardContent>{description}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverInfo;
