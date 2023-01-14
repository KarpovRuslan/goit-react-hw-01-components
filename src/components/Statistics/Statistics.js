import PropTypes from 'prop-types'; 
import css from "./Statistics.module.css";

const Statistics = ({ stats }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.list}>
                {stats.map((elem) => (
                    <li
                        key={elem.id}
                        style={{
                            backgroundColor: `${'#'+Math.floor(Math.random() * 16777215).toString(16)}`,
                        }}
                    >
                        <span className={css.label}>{elem.label}</span>
                        <span className={css.percentage}>{elem.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            percentage: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
};
    
export default Statistics;

