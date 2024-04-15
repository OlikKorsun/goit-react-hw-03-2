import css from './Contact.module.css'
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.contactCard}>
            <address>
                <p className={css.name}><IoPerson className={css.icon}/>{name}</p>
                <p className={css.number}><FaPhone className={css.icon}/>{number}</p>
            </address>  
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}