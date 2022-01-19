import { Link } from 'react-router-dom';
import './HomeItem.css';

const HomeItem = ({ icon, title, text, slug }) => {
  return (
    <div className="HomeItem">
      <Link to={`/${slug}`}>
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
      </Link>
      <p>{text}</p>
      <Link to={`/${slug}`}>Voir Plus</Link>
    </div>
  );
};

export default HomeItem;
