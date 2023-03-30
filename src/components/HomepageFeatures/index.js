import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        <p>
          <code>import &#123;is&#125; from "thiis";</code>
        </p>
        <p>
          <code>is.object.not.empty($var)</code>
        </p>
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: <>Package thiis lets you focus on your important things.</>,
  },
  {
    title: 'Easy to install',
    description: (
      <>
        <code>npm i thiis</code>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
