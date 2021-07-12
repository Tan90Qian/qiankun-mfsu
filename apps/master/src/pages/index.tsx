import { Link } from 'umi';

import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Master</h1>
      <Link to="/slave">go to slave</Link>
    </div>
  );
}
