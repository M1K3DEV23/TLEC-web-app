import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contenedor-footer">
          <div className="sec abouts">
            <h2>Acerca De Nosotros</h2>
            <p>Amplia variedad de libros y recursos de lectura completa.</p>
            <ul className="sci">
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-discord"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="sec quicklinks">
            <h2>Support</h2>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div> */}
          <div className="sec contact">
            <h2>Contacto</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>
                  <a href="tel:9611898688">961 189 8688</a>
                </p>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>
                  <a href="mailto:Tlec@gmail.com">Enviar Correo:TLEC@hotmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright 2023 TLEC. Todos los derechos reservados.</p>
      </div>
    </>
  );
};

export default Footer;
