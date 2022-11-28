import css from './Statistics.module.css'
import PropTypes from 'prop-types'
const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      { data.title ? (<h2 className={css.title}>{data.title}</h2>) : <h2 className={css.title}>Upload stats</h2> }

      <ul className={css.statList}>
        {data.map( item => 
          <li key={item.id} className={css.item}>
          <span className={css.label}>{ item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
        )}
      </ul>
    </section>
  )
};

Statistics.protoTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }) 
}

export { Statistics };