import React from 'react';
import css from './List.module.css';

export const List = ({ birthdays, title }) => {
  return (
    <div className={css.birthdayListWrapper}>
      {title && (
        <h1 className={css.title}>Birthdays today : {birthdays.length} </h1>
      )}
      <ul className={css.birthdayList}>
        {birthdays.map(({ id, name, age, image }) => (
          <li className={css.person} key={id}>
            <img className={css.personImg} src={image} alt={name} />
            <div className={css.personDescription}>
              <h2 className={css.personName}>{name}</h2>
              <p className={css.personAge}> turns {age} </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
