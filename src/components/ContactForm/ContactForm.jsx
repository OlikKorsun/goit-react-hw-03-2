import css from './ContactForm.module.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { nanoid } from 'nanoid'
import { useId } from 'react'
import * as Yup from 'yup'

export default function ContactForm({ onAdd }) {
    const nameId = useId();
    const phoneId = useId();

    const startValues = {
        username: '',
        phone: '',
    }

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.username,
            number: values.phone,
        })
        actions.resetForm();
    };

    const contactSchema = Yup.object().shape({
        username: Yup.string().min(3, 'Too short! Write your name').max(50, 'Too long! Delete something.').matches(/^[^\d]+$/, 'Name cannot contain numbers').required('Required'),
        phone: Yup.string().min(3,'Too short!').max(9, 'Too long!').matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format: 000-00-00').required('Required!'),
    })

    return (
        <Formik initialValues={startValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name
                <Field type='text' name='username' id={nameId} className={css.field}></Field>
                <ErrorMessage name='username' component='span' className={css.error}></ErrorMessage></label>
                <label htmlFor={phoneId} className={css.label}>Number
                <Field type='text' name='phone' id={phoneId} className={css.field}></Field>
                <ErrorMessage name='phone' component='span' className={css.error}></ErrorMessage></label>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
  );
}