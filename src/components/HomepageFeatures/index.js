import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Controle Total da Academia',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Organização de alunos, professores, modalidades e horários de forma simples e eficiente, garantindo que sua academia funcione sem complicações.
      </>
    ),
  },
  {
    title: 'Portal para Alunos',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Permite que alunos visualizem planos, modalidades e horários, e se inscrevam facilmente nas aulas de sua preferência.
      </>
    ),
  },
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        O sistema foi desenvolvido para permitir que alunos, visitantes e administradores utilizem todas as funcionalidades de forma intuitiva e rápida, sem complicações.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
