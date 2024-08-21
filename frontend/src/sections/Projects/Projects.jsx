import styles from './ProjectsStyles.module.css';
import DDOS from '../../assets/DDOS.png';
import EcommerceCart from '../../assets/EcommerceCart.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={DDOS}
          link="https://ddos-stimulation.vercel.app/"
          h3="DDOS"
          p="React|Node|Mongo|Express"
        />
        <ProjectCard
          src={EcommerceCart}
          link="https://e-commerce-cart-theta.vercel.app/"
          h3="E-commerce Cart"
          p="React|Context Api"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
