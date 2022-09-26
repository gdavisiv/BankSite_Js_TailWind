import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Make purchases knowing <br className="sm:block hidden" /> your information is secure.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money.  Instead of using competitors that just want to stick you with high interest rates.
        </p>

        <Button styles="mt-10" />
      </div>
    </section>
  )
}

export default Business