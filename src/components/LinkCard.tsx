// src/components/LinkCard.tsx
interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, description }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <a
        href={url}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
};

export default LinkCard;
