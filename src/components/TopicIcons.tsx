import {
  Heart,
  Activity,
  Bandage,
  Droplet,
  Baby,
  Scale,
  Hand,
  UserCheck,
} from "lucide-react";

interface TopicIconProps {
  iconName: string;
  className?: string;
}

const TopicIcon = ({ iconName, className = "h-8 w-8" }: TopicIconProps) => {
  const iconMap = {
    heart: Heart,
    activity: Activity,
    bandage: Bandage,
    droplet: Droplet,
    baby: Baby,
    scale: Scale,
    hand: Hand,
    "user-check": UserCheck,
  };

  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Heart;

  return <IconComponent className={className} />;
};

export default TopicIcon;