import PropTypes from 'prop-types';


const ThreeCard = ({card}) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

ThreeCard.propTypes = {
card: PropTypes.object
}

export default ThreeCard;