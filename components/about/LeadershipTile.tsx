import Image from 'next/image';
import { TeamMember } from './types';

interface LeadershipTileProps {
  member: TeamMember;
}

export default function LeadershipTile({ member }: LeadershipTileProps) {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-purple-400 font-medium">{member.position}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{member.bio}</p>
      <div className="flex flex-wrap gap-2">
        {member.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
