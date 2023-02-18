import PropTypes from 'prop-types';
import css from './Statistics.module.css';


export const StatisticsList = ({id, label, percentage}) => {
    return (
        <li className={css.item} key={id} backgroundColor={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
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
            {/* <ul className={css.stat_list}>
                <li className={css.item} key={stats.data.id}>
                    <span className={css.label} >{stats.data.label}</span>
                    <span className={css.percentage}>{stats.data.percentage}</span>
                </li>
                <li className={css.item} key={stats.data.id}>
                    <span className={css.label}>{stats.data.label}</span>
                    <span className={css.percentage}>{stats.data.percentage}</span>
                </li>
                <li className={css.item} key={stats.data.id}>
                    <span className={css.label}>{stats.data.label}</span>
                    <span className={css.percentage}>{stats.data.percentage}</span>
                </li>
                <li className={css.item} key={stats.data.id}>
                    <span className={css.label}>{stats.data.label}</span>
                    <span className={css.percentage}>{stats.data.percentage}</span>
                </li>
            </ul> */}
        </section>
    )
}


StatisticsList.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
}