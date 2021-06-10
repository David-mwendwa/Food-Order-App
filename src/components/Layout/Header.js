import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <Header className={classes.Header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </Header>
      <div className={classes['main.image']}>
        <img src={mealsImage} alt='A table full of foods' />
      </div>
    </Fragment>
  );
};

export default Header;
