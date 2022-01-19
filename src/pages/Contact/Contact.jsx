import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { AiTwotonePhone } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <Form />
      <div className="infos">
        <ul>
          <Link to="tel:09342241">
            <li>
              <AiTwotonePhone />
              Tel
            </li>
          </Link>
          <li>
            <MdMail />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
