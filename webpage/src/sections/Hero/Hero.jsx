import styles from './HeroStyles.module.css';
import heroImg from '../../assets/pfp.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/IvanPan_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="PFP of Ivan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Light/Dark Mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ivan Pan
        </h1>
        <h2>Pursuing CS @ Rutgers University</h2>
        <span>
          <a href="https://github.com/ivanpan0626" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/ivan-pan1" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Driven computer science student 
        with a solid grasp of software development 
        and problem-solving skills. Looking for internships!
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
