import "./Contact.style.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div className="sectionHeader">
        <h3>CONTACT US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores
          aliquam, accusantium atque fugiat minima.
        </p>
      </div>

      <div className="contactContainer">
        <div className="appoinment">
          <div className="contacts">
            <div className="contact">
              <p>Mobile Number</p>
              <p>+135 773 321 4442</p>
            </div>

            <div className="contact">
              <p>Email Address</p>
              <p>demo@demo.com</p>
            </div>
          </div>

          <h4>Make An Appoinment</h4>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="googleMap">
          <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.0876688001554!2d35.29540987649828!3d37.03155597218204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1528892a2fc97ed1%3A0x60c96c565fe34461!2sToros%2C%20%C5%9Eht.%20Ebubekir%20Durmu%C5%9F%20Sk.%2C%2001170%20%C3%87ukurova%2FAdana!5e0!3m2!1str!2str!4v1742540275515!5m2!1str!2str"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
