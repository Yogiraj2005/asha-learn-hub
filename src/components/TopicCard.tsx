import { Play } from "lucide-react";

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onWatchVideo: () => void;
}

const TopicCard = ({ icon, title, description, onWatchVideo }: TopicCardProps) => {
  return (
    <div className="group rounded-xl bg-healthcare-card p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-healthcare-blue to-healthcare-blue-dark text-white">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-healthcare-blue transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Watch Video Button */}
        <button
          onClick={onWatchVideo}
          className="inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-healthcare-blue to-healthcare-blue-dark px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-healthcare-blue focus:ring-offset-2"
        >
          <Play className="h-4 w-4" />
          <span>Watch Video</span>
        </button>
      </div>
    </div>
  );
};

export default TopicCard;