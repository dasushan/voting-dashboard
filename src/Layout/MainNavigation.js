import classes from './MainNavigation.module.css';
import { Link } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link>
        <div className={classes.logo}> Voting Dashboard</div>
      </Link>

      <ul>
        <li>
          <Link>Login</Link>
        </li>
        <li>
          <Link>Logout</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
