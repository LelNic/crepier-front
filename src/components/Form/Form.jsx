import './Form.css';

const Form = () => {
  return (
    <form className="Form">
      <input
        type="text"
        className="texte"
        placeholder="Nom de famille"
        name="subject"
        required="required"
      />
      <input
        type="text"
        className="texte"
        placeholder="Prénom"
        name="subject"
        required="required"
      />
      <input
        type="email"
        className="texte"
        placeholder="Email"
        name="email"
        required="required"
      />
      <textarea className="message" name="message"></textarea>
      <input
        type="submit"
        className="contact-button"
        value="Envoyer"
        required
      />
    </form>
  );
};

export default Form;
