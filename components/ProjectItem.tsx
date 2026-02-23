interface ProjectItemProps {
  name: string;
  description: string;
  stack?: string;
}

export default function ProjectItem({ name, description, stack }: ProjectItemProps) {
  return (
    <div className="py-2">
      <p className="text-[15px] leading-relaxed">
        <span className="font-medium text-white">{name}</span>
        {' — '}
        {description}
      </p>
      {stack && (
        <p className="text-[13px] text-[#6b6b6b] mt-1">{stack}</p>
      )}
    </div>
  );
}
