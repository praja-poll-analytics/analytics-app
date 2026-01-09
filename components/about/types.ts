export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  tags: string[];
}

export interface AdvisoryMember {
  name: string;
  title: string;
  expertise: string;
  image: string;
}

export interface MediaCoverage {
  title: string;
  type: 'video' | 'press';
  description: string;
  youtubeUrl?: string; // For video type - YouTube video URL
  image?: string; // For press type - press clipping image
}
