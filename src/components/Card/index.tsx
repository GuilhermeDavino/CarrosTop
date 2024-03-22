import './styles.css'
import carImg from '../../assets/car.png';
import CardButton from '../CardButton';
export default function Card() {
    return (
        <div className="ct-card">
            <img src={carImg} alt="Car" />
            <h3>Audi Supra TT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <CardButton/>
        </div>
    );
}