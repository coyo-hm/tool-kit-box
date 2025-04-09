import * as styles from "@/components/common/LoadingSpinner/loadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingSpinner}>
        {/* 외부 원 */}
        <div className={styles.outerCircle} />
        {/* 회전하는 원 */}
        <div className={styles.innerCircle} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
