import { useRef } from 'react';
import { useEffect, useState } from 'react';
// Importar mi api
import datos from '../../datos';
// Estilos
import './CardLibros.css';

// Otro componente para manejar las card de los libros
const Book = ({ titulo, cover, sinopsis, link }) => {
  return (
    <>
      <div className="tarjeta">
        <div className="imgBx">
          <img src={cover} alt={titulo} />
        </div>
        <div className="contenido">
          <h2>{titulo}</h2>
          <p>{sinopsis}</p>
          <a href={link} target="_blank">
            Leer
          </a>
        </div>
      </div>
    </>
  );
};

const CardLibros = () => {
  const [libros, setLibros] = useState(0);

  // Crear una referencia a libros
  const librosRef = useRef(null);

  useEffect(() => {
    const getLibros = async () => {
      // Recuperar el listado de mis libros
      const listadoLibros = await datos;

      const newLibros = listadoLibros.map(async (libro) => {
        const { id, titulo, cover, sinopsis, link } = libro;
        return { id, titulo, cover, sinopsis, link }; // Devolver un objeto con los datos del libro
      });

      // Guardar en mi estado los libros
      setLibros(await Promise.all(newLibros));

      // Actualizar la referencia a libros
      librosRef.current = await Promise.all(newLibros);
    };

    getLibros();
  }, []);

  return (
    <>
      <section className="contenedor">{librosRef.current && librosRef.current.map((libro) => <Book key={libro.id} {...libro} />)}</section>
    </>
  );
};

export default CardLibros;
