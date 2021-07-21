import React from "react";
import styles from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contacts-actions";
import {
  getVisibleContacts,
  getContacts,
} from "../../redux/contacts/contacts-selectors";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ReactComponent as DeleteIcon } from "../img/delete.svg";
import popTransition from "../../utils/transitions/pop.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const contacts = useSelector(getContacts);

  return (
    <>
      <CSSTransition
        in={!contacts.length}
        timeout={250}
        classNames={popTransition}
        mountOnEnter
        unmountOnExit
      >
        <p>Your phonebook is empty. Please add contact.</p>
      </CSSTransition>
      <TransitionGroup component="ul" className={styles.list}>
        {visibleContacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            mountOnEnter
            unmountOnExit
            classNames={popTransition}
          >
            <li className={styles.item}>
              <p className={styles.text}>
                {name}: {number}
              </p>
              <button
                className={styles.btn}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon width="21px" height="21px" />
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}

export default ContactList;
