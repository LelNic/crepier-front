import { FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import './Social.css';

const Social = () => {
  return (
    <ul className="Social">
      <li>
        <FaInstagramSquare />
      </li>
      <li>
        <FaLinkedin />
      </li>
      <li>
        <MdMail />
      </li>
    </ul>
  );
};

export default Social;
