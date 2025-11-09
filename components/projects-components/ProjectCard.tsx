"use client";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  stats: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  stats,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-none overflow-hidden cursor-pointer">
      {/* Image container */}
      <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
        {/* Image will go here */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-oswald text-xl font-bold text-gray-900 uppercase mb-2">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <span className="font-inter text-sm text-gray-600">{category}</span>
          <span className="font-oswald text-orange-500 font-bold">{stats}</span>
        </div>
      </div>
    </div>
  );
}
