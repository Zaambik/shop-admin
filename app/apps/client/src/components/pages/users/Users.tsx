import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchUsers, filterUsers, getUsers } from '../../../redux/slices/users/users.slice';
import { deleteOneUser, deleteStatus } from '../../../redux/slices/users/deleteUser.slice';

import styles from './Users.module.scss';
import back from '../../../assets/back.svg';
import user from '../../../assets/user.svg';
import edit from '../../../assets/edit.svg';
import deleteIcon from '../../../assets/delete.svg';

const Users: FC = () => {
   const users = useAppSelector(getUsers);
   const statusDelete = useAppSelector(deleteStatus)
   const dispatch = useAppDispatch();

   useEffect(() => {
      window.scrollTo(0, 0);
      document.title = 'Сотрудники';
      dispatch(fetchUsers());
   }, []);

   const onDelete = (_id: string) => {
      if (confirm('Вы уверены, что хотите удалить сотрудника?')) {
         dispatch(deleteOneUser({ id: _id, token: '' }));
         dispatch(filterUsers(_id));
         if (statusDelete === 'success') {
            alert('Сотрудник успешно удален');
         } else if (statusDelete === 'error') {
            alert('Ошибка удаления сотрудника');
         }
      }
   };

   if (users.length === 0) {
      return (
         <div className={styles.wrapper}>
            <div className={styles.wrapper}>
               <nav>
                  <Link className="back" to="/" aria-label="назад на главную">
                     <img src={back} />
                     Назад
                  </Link>
                  <Link className="new user" to="/users/add" aria-label="добавить нового пользователя">
                     Создать
                     <img src={user} />
                  </Link>
               </nav>
               <div className={styles.table}></div>
               <h1>нет ожидаемых доставок</h1>
            </div>
         </div>
      );
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.wrapper}>
            <nav>
               <Link className="back" to="/" aria-label="назад на главную">
                  <img src={back} />
                  Назад
               </Link>
               <Link className="new user" to="/users/add" aria-label="добавить нового пользователя">
                  Создать
                  <img src={user} />
               </Link>
            </nav>
            <div className={styles.table}>
               <form className={styles.table__row}>
                  <input type="search" placeholder="Поиск сотрудника по   коду /  имени" />
                  <button type="button">Поиск</button>
               </form>
               {users.map((item, index) => (
                  <div className={styles.table__row} key={index}>
                     <span>
                        <h3>код</h3>
                        {item._id}
                     </span>
                     <span>
                        <h3>должность</h3>
                        {item.role}
                     </span>
                     <span>
                        <h3>имя</h3>
                        {item.firstName}
                     </span>
                     <span>
                        <h3>фамилия</h3>
                        {item.secondName}
                     </span>
                     <span>
                        <Link className={styles.edit} to={`/users/edit/${item._id}`} title="изменить сотрудника">
                           <img src={edit} />
                        </Link>
                        <button className={styles.delete} type="button" title="удалить сотруднкиа" onClick={() => onDelete(item._id)}>
                           <img src={deleteIcon} />
                        </button>
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Users;
