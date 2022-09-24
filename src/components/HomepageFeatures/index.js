import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '圧倒的な使いやすさ',
    Svg: require('@site/static/img/undraw_counting_stars_re_smvv.svg').default,
    description: (
      <>
        優れたプログラミング言語 Kotlin により、快適な競技プログラミング体験を。
      </>
    ),
  },
  {
    title: '充実した解説',
    Svg: require('@site/static/img/undraw_starry_window_re_0v82.svg').default,
    description: (
      <>
        まだ書いてないけど。
      </>
    ),
  },
  {
    title: 'ねむいです',
    Svg: require('@site/static/img/undraw_relaunch_day_902d.svg').default,
    description: (
      <>
        おふとんに入りたい。
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
