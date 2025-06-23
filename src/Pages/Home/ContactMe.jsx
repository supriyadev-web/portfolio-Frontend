import React from "react";
import image from "../../assets/right_img.png"; // Adjust the path based on where your image is located

const Contact = () => {

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me using the form below!</p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-form"
          >
            <input
              type="hidden"
              name="access_key"
              value="fd20787b-d529-437b-86f7-10260bb1f3e3" // Replace with your Web3Forms API access key
            />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit">Send</button>
          </form>
        </div>

        {/* Display the image */}
        <div className="contact-image">
          <img
            style={{ margin: "20px" }}
            src={image} // Use the imported image
            alt="Contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
