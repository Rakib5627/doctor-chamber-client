
import clock from '../../../../assets/icons/clock.svg';
import marker from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import ThreeCard from './ThreeCard';

const ThreeCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-accent'
        },
        {
            id: 2,
            name: 'Visit Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: ' bg-gray-800'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-accent'
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <ThreeCard
                    key={card.id}
                    card={card}
                ></ThreeCard>)
            }
        </div>
    );
};

export default ThreeCards;