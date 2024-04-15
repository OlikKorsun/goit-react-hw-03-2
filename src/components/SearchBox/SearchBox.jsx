import css from './SearchBox.module.css'
export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.searchForm}>
            <p className={css.labelFilter}>Find contacts by name</p>
            <input className={css.inputSearch} type="text" value={value} onChange={(evt) => onFilter(evt.target.value)} />
        </div>
    )
}
