import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import TopicCard from "@/components/TopicCard";
import VideoModal from "@/components/VideoModal";
import TopicIcon from "@/components/TopicIcons";
import { topics } from "@/data/topics";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    title: string;
    videoId: string;
  } | null>(null);
  const { toast } = useToast();

  const handleWatchVideo = (title: string, videoId: string) => {
    setSelectedVideo({ title, videoId });
    toast({
      title: "Loading Video",
      description: `Opening ${title} training video...`,
    });
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-healthcare-bg">
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Essential Training Videos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Access comprehensive training materials for primary healthcare procedures. 
            Each video provides step-by-step guidance for ASHA workers.
          </p>
        </section>

        {/* Topics Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              icon={<TopicIcon iconName={topic.icon} />}
              title={topic.title}
              description={topic.description}
              onWatchVideo={() => handleWatchVideo(topic.title, topic.videoId)}
            />
          ))}
        </section>

        {/* Footer Info */}
        <footer className="mt-16 text-center">
          <div className="rounded-lg bg-healthcare-card p-6 shadow-card">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Need Help?
            </h3>
            <p className="text-sm text-muted-foreground">
              These training videos are designed to support ASHA workers with essential healthcare procedures. 
              Watch the videos multiple times to reinforce your learning.
            </p>
          </div>
        </footer>
      </main>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleCloseModal}
        title={selectedVideo?.title || ""}
        videoId={selectedVideo?.videoId || ""}
      />
    </div>
  );
};

export default Index;
