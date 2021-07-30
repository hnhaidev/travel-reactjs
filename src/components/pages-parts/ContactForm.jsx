import { useState } from "react";

function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const submitContact = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact form</h3>
      </div>

      <div className="group">
        <input
          type="text"
          className="group__control"
          placeholder="Your name"
          onChange={handleChange("name")}
          value={name}
        />
      </div>

      <div className="group">
        <input
          type="email"
          className="group__control"
          placeholder="abc@gmail.com"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="group">
        <textarea
          name=""
          id=""
          cols="12"
          row="8"
          className="group__textarea"
          placeholder="write your message"
          onChange={handleChange("message")}
          defaultValue={message}
        ></textarea>
      </div>

      <div className="group">
        <input type="submit" value="Send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
}

export default ContactForm;
