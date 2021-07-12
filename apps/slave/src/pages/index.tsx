import { history } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Slave</h1>
      <a onClick={() => history.goBack()}>back</a>
    </div>
  );
}
