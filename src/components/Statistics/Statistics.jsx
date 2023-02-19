import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


export const StatisticsList = ({ id, label, percentage }) => {
    return (
        <li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label} >{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    
)
}

export const Statistics = ({ title, stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title} title="Upload stats" >{title}</h2>

            <ul className={css.stat_list}>
                {stats.map(stat => (
                    <StatisticsList
                    key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}


// StatisticsList.propTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
// }

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}