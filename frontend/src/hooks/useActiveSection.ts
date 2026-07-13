import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check if user scrolled to the bottom
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Check if user is at the top
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0]);
        return;
      }

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    // Run on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
