import styles from './ProjectsStyles.module.css';
import AILol from '../../assets/AILol.png';
import WebchatDemo from '../../assets/WebchatDemoIMG.jpg';
import AnimeDemo from '../../assets/animeDemoIMG.png';
import ProjectCard from '../../common/ProjectCard';
import HunanExpressDemo from '../../assets/HunanExpress.jpeg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={AILol}
          link="https://github.com/ivanpan0626/LoL-AI-Matchup-Predictor-with-Data-Analysis"
          h3="AI LoL"
          p="AI League of Legends Match Up Analysis"
        />
        <ProjectCard
          src={WebchatDemo}
          link="https://github.com/ivanpan0626/Webchat-Games"
          h3="Webchat & Games"
          p="Online Webchat with mini games"
        />
        <ProjectCard
          src={AnimeDemo}
          link="https://github.com/ivanpan0626/AI-Anime-Recomender"
          h3="Recommendation System"
          p="Uses collaborative filtering for Anime"
        />
        <ProjectCard
          src={HunanExpressDemo}
          link="https://hunanexpress.vercel.app"
          h3="Hunan Express"
          p="Hunan Express Online Ordering (IN DEVELOPMENT)"
        />
      </div>
    </section>
  );
}

export default Projects;
