export function SocialLink({ href, name, icon }) {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors" 
      aria-label={`Visit our ${name} page`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg 
        className="w-6 h-6 fill-current" 
        role="img" 
        aria-hidden="true"
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{name}</title>
        <path d={icon} />
      </svg>
    </a>
  );
}