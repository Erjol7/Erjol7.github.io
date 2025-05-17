/* ======================================== */
/*             RESET & BASICS             */
/* ======================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto Mono', monospace;
  background-color: #f4f4f4;
  line-height: 1.6;
}

/* ======================================== */
/*             HEADER STYLES              */
/* ======================================== */
.header {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.header-img {
  width: 100%;
  height: auto;
  display: block;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 20px;
}

.header-overlay h1 {
  font-size: 3em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.header-overlay h2 {
  font-size: 1.8em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

/* ======================================== */
/*             STATIONS                   */
/* ======================================== */
.stations {
  background-color: #ffc0cb;
  padding: 40px 0;
  text-align: center;
}

.station-buttons {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 20px;
}

.station-btn {
  background-color: #87CEFA;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.station-btn:hover {
  background-color: #00BFFF;
  transform: scale(1.05);
}

/* ======================================== */
/*             MODAL STYLES               */
/* ======================================== */
.modal {
  display: none; /* I fshehur nga fillimi */
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.7);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.modal-content .close {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #aaa;
  cursor: pointer;
  transition: color 0.3s;
}

.modal-content .close:hover {
  color: #000;
}

/* ======================================== */
/*           FOOTER & GALLERY             */
/* ======================================== */
.footer {
  background-color: #333;
  padding: 20px 0;
  text-align: center;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.gallery-image {
  width: 200px;
  height: auto;
  border-radius: 10px;
}

/* ======================================== */
/*           QUIZ FORM STYLES             */
/* ======================================== */
form {
  text-align: left;
}

form fieldset {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
}

form legend {
  font-weight: bold;
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 10px;
}

form input[type="text"],
form textarea {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #bbb;
  border-radius: 3px;
}

button {
  background-color: #87CEFA;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #00BFFF;
}

.result {
  margin-top: 15px;
  font-weight: bold;
}

/* ======================================== */
/*           RESPONSIVE STYLES            */
/* ======================================== */
@media (min-width: 1200px) {
  .header-overlay h1 {
    font-size: 4em;
  }
  .header-overlay h2 {
    font-size: 2em;
  }
  .station-btn {
    font-size: 1.5em;
    padding: 20px 30px;
  }
}

@media (min-width: 1920px) {
  .header-overlay h1 {
    font-size: 5em;
  }
  .header-overlay h2 {
    font-size: 2.5em;
  }
  .station-btn {
    font-size: 1.8em;
    padding: 25px 35px;
  }
}
