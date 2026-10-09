import { useState, useEffect } from 'react';
import InfiniteMenu from './interactive-component/InfiniteMenu'
import './style/Achievements.css'
 export const items = [
  {
    image: '/achivements/1.png',
    link: 'https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing',
    title: 'Certifications',
    description: 'Professional certifications in software development & AI.',
  },
  {
    image: '/achivements/2.png',
    link: 'https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing',
    title: 'Hackathons',
    description: 'Participation and wins in coding hackathons.',
  },
  {
    image: '/achivements/3.png',
    link: 'https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing',
    title: 'Coding Achievements',
    description: 'Milestones across competitive programming platforms.',
  },
  {
    image: '/achivements/4.png',
    link: 'https://drive.google.com/drive/folders/1KPkFRgruO_o49jbuSs4gDVjy5po7IYMs?usp=sharing',
    title: 'Awards',
    description: 'Recognitions and awards earned along the way.',
  },
  {
    image: '/achivements/5.png',
    link: 'https://leetcode.com/u/Rohith_Rohan/',
    title: 'LeetCode',
    description: 'Problem-solving progress and streaks on LeetCode.',
  },
  {
    image: '/achivements/6.png',
    link: 'https://github.com/rohith-2252',
    title: 'GitHub Contributions',
    description: 'Consistent contributions and open-source activity.',
  },
];
export default function Achievements() {

  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const menuSection = document.querySelector('.infinite-menu-section');

    if (!menuSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollButton(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(menuSection);

    return () => observer.disconnect();
  }, []);

  const scrollToNextSection = () => {
    document.getElementById('next-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="portfolio-page">
      {/* Infinite Menu */}
      <section className="infinite-menu-section">
        <div className="infinite-menu-container">
          <InfiniteMenu items={items} scale={1.0} />
        </div>

        {/* Show button only while viewing InfiniteMenu */}
        {showScrollButton && (
          <button
            type="button"
            className="scroll-next-button"
            onClick={scrollToNextSection}
            aria-label="Scroll to the next section"
          >
            <span>↓</span>
          </button>
        )}
      </section>

      {/* Your existing next portfolio section */}
      <section id="next-section" className="next-section">
        <h2>Explore More</h2>
        <p>Continue exploring my portfolio.</p>
      </section>
    </main>

  );
}