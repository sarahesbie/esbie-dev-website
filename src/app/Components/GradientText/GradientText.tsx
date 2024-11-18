import styles from "./GradientText.module.scss";

interface GradientTextProps {
  gradientIndex?: number;
  text: string;
}

const GradientText = ({ text, gradientIndex = 1 }: GradientTextProps) => {
  const gradientClass = `gradient${gradientIndex}`;

  return (
    <span className={`${styles.gradientText} ${styles[gradientClass]}`}>
      {text}
    </span>
  );
};

export default GradientText;
