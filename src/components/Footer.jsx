import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <GitHub />,
      url: 'https://github.com/sheraphineshovan',
      label: 'GitHub'
    },
    {
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/sheraphine-shovan-m/',
      label: 'LinkedIn'
    },
    {
      icon: <Email />,
      url: 'mailto:sheraphineshovan@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900/90 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Sheraphine Shovan M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 