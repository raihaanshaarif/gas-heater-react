'use client';
//css
import styles from './SectionTitle.module.css'

const SectionTitle = ({dataAddClass, dataSubtitle, dataTitle, dataTextUnder, dataMaxWidth, dataText, headingLevel = 'h2' }) => {
  // Map heading level string to component
  const HeadingComponent = headingLevel;
  
  return (
    <>
      <div className={`${styles.blocktitle} ${dataAddClass ? dataAddClass : ''} blocktitle relative unselectable`} style={{maxWidth: dataMaxWidth || 'inherit'}}>
			{dataTextUnder ? (
				<div className={`${styles.blocktitle__textunder} blocktitle__textunder absolute whitespace-nowrap`}>{dataTextUnder}</div>
			):null}
			{dataSubtitle ? (
				<div className={`${styles.blocktitle__subtitle} blocktitle__subtitle relative`}>{dataSubtitle}</div>
			):null}
			{dataTitle ? (
				<HeadingComponent className={`${styles.blocktitle__title} blocktitle__title relative`}>{dataTitle}</HeadingComponent>
			):null}
			{dataText ? (
				<div className={`${styles.blocktitle__text} blocktitle__text relative`}>{dataText}</div>
			):null}
      </div>
    </>
  );
}
export default SectionTitle;