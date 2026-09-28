<template>
  <!-- HERO SECTION -->
  <div class="background-img">
    <div class="text-content welcome-flex">
      <p>— GET IN TOUCH</p>

      <i>
        <h1>We'd Love to Hear From You</h1>
      </i>

      <p class="sub-text">
        Questions, wholesale inquiries, event bookings, or just to say hello
      </p>

      <p class="sub-text">
        — we're here.
      </p>
    </div>
  </div>


  <!-- CONTACT SECTION -->
  <div class="contact-sections">

    <!-- FIND US -->
    <div class="find-us">

      <h1>Find Us</h1>

      <!-- Main Cafe -->
      <div class="contact-item">

        <div class="div-small">📍</div>

        <div class="contact-text">
          <p class="div-heading">MAIN CAFÉ</p>

          <p class="div-para">
            14 Roasters Lane, F-6
            <br />
            Faisalabad, Pakistan
          </p>
        </div>

      </div>


      <!-- Phone -->
      <div class="contact-item">

        <div class="div-small">📞</div>

        <div class="contact-text">
          <p class="div-heading">PHONE</p>

          <p class="div-para">
            +92 51 123 4567
          </p>
        </div>

      </div>


      <!-- Email -->
      <div class="contact-item">

        <div class="div-small">✉️</div>

        <div class="contact-text">
          <p class="div-heading">EMAIL</p>

          <p class="div-para">
            hello@mariacaffix.com
            <br />
            wholesale@mariacaffix.com
          </p>
        </div>

      </div>


      <!-- Hours -->
      <div class="contact-item">

        <div class="div-small">🕐</div>

        <div class="contact-text">
          <p class="div-heading">HOURS</p>

          <p class="div-para">
            Mon–Fri: 7:00 AM – 9:00 PM
            <br />
            Sat: 8:00 AM – 10:00 PM
            <br />
            Sun: 9:00 AM – 8:00 PM
          </p>
        </div>
      </div>
             <img class="location-img" src="../assets/location-image.png">
    </div>


    <!-- SEND MESSAGE FORM -->
    <div class="contact-flex">

      <h1>Send a Message</h1>

      <!-- First Row -->
      <div class="top-placeholders">

        <div class="form-group">
          <label>YOUR NAME</label>

          <input
            type="text"
            placeholder="Maria Khanim"
          />
        </div>


        <div class="form-group">
          <label>EMAIL ADDRESS</label>

          <input
            type="email"
            placeholder="hello@example.com"
            required
          />
        </div>

      </div>


      <!-- Subject -->
      <div class="form-group full-width">

        <label>SUBJECT</label>

        <input
          type="text"
          placeholder="Wholesale inquiry, event booking..."
        />

      </div>


      <!-- Message -->
      <div class="form-group full-width">

        <label>MESSAGE</label>

        <textarea
          placeholder="Tell us how we can help..."
        ></textarea>

      </div>


      <!-- Button -->
      <button class="send-button">
        SEND MESSAGE →
      </button>

    </div>
  </div>
</template>


<style scoped>

/* =========================
   HERO SECTION
========================= */

.background-img {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.background-img::before {
  background-image:
    linear-gradient(
      90deg,
      rgba(51, 34, 26, 0.75),
      rgba(48, 30, 19, 0.35),
      rgba(46, 27, 19, 0.50)
    ),
    url('@/assets/coffee-beans.jpg');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(3px);
  transform: scale(1.03);

  content: "";
  position: absolute;
  inset: -8px;
  z-index: 0;
}


/* Hero text */

.text-content {
  position: relative;
  z-index: 1;
}

.welcome-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 400px;

  line-height: 40px;
  margin-left: 40px;
}

.text-content p {
  color: bisque;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 700;
  margin: 5px;
}

.text-content h1 {
  color: white;
  font-size: 50px;
  margin: 10px 0;
}

.sub-text {
  color: bisque;
  font-size: 16px;
  font-weight: 300 ;
  letter-spacing: 0 ;
}


/* =========================
   CONTACT SECTIONS
========================= */

.contact-sections {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: 100px;

  padding: 70px 80px;

  background-color: #f5ede0;
}


/* =========================
   FIND US
========================= */

.find-us {
  width: 40%;
}

.find-us h1 {
  color: rgba(51, 34, 26, 0.99);
  font-size: 35px;
  font-weight: 600;

  margin-bottom: 35px;
}


/* Contact rows */

.contact-item {
  display: flex;
  align-items: flex-start;

  margin-top: 28px;
}


/* Icon box */

.div-small {
  background-color: rgb(216, 211, 183);

  height: 28px;
  width: 28px;

  border: 1px solid rgb(128, 107, 76);

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
}


/* Contact text */

.contact-text {
  margin-left: 18px;
}


/* Heading */

.div-heading {
  color: #a78a52;

  font-size: 13px;

  margin: 0;

  letter-spacing: 1.5px;

  font-weight: 500;
}


/* Contact information */

.div-para {
  margin: 5px 0 0 0;

  color: #111;

  font-size: 14px;

  line-height: 21px;
}


/* =========================
   SEND MESSAGE FORM
========================= */

.contact-flex {
  width: 55%;

  display: flex;

  flex-direction: column;

  align-items: flex-start;
}

.contact-flex > h1 {
  color: rgba(51, 34, 26, 0.99);

  font-size: 35px;

  font-weight: 600;

  margin: 0 0 35px 0;
}


/* First two inputs */

.top-placeholders {
  display: flex;

  gap: 22px;

  width: 100%;
}


/* Every form field */

.form-group {
  display: flex;

  flex-direction: column;

  flex: 1;

  margin-bottom: 25px;
}


/* Full width fields */

.full-width {
  width: 100%;
}


/* Labels */

.form-group label {
  color: #76594b;

  font-size: 12px;

  letter-spacing: 1.5px;

  margin-bottom: 10px;

  font-weight: 500;
}


/* Inputs */

.form-group input {
  width: 100%;

  height: 44px;

  box-sizing: border-box;

  padding: 10px 14px;

  border: 1px solid #d3c1ab;

  border-radius: 2px;

  background-color: #faf7f2;

  color: #2c1a0e;

  font-size: 14px;

  outline: none;
}


/* Textarea */

.form-group textarea {
  width: 100%;

  height: 145px;

  box-sizing: border-box;

  padding: 14px;

  border: 1px solid #d3c1ab;

  border-radius: 2px;

  background-color: #faf7f2;

  color: #2c1a0e;

  font-size: 14px;

  font-family: inherit;

  resize: vertical;

  outline: none;
}


/* Placeholder */

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #9b9189;
}


/* Focus */

.form-group input:focus,
.form-group textarea:focus {
  border-color: #a78a52;
}


/* =========================
   SEND BUTTON
========================= */

.send-button {
  width: 178px;

  height: 45px;

  border: none;

  border-radius: 2px;

  background-color: #713b20;

  color: white;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: 1px;

  cursor: pointer;

  margin-top: 0;
}


.send-button:hover {
  background-color: #C8A96B;

  color: #2c1a0e;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {

  .contact-sections {
    flex-direction: column;

    padding: 50px 30px;

    gap: 60px;
  }

  .find-us,
  .contact-flex {
    width: 100%;
  }

  .top-placeholders {
    flex-direction: column;

    gap: 0;
  }

  .text-content h1 {
    font-size: 38px;

    text-align: center;
  }
 
}
.location-img{
  display: flex;
  justify-content: center;
  align-items:flex-start;
  height: 200px;
  margin-top: 40px;
  margin-right: 30px;
  width:410px;
}
</style>