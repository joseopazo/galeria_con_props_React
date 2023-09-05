import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footers from "./components/Footers";

const App = () => {
  return (
    <div className="tituloh1">
      <Header title={"Gleria de Imagenes con React"} />
      <div className="cards container">
        <Cards
          linkimg={"https://picsum.photos/200/300"}
          titulo={"Imagen 1"}
          descripcion={
            "aca un ejemplo con react donde mando por props la imfoemacion hacia el componente"
          }
        />

        <Cards
          linkimg={"http://placekitten.com/g/200/300"}
          titulo={"imagen 2"}
          descripcion={
            "aca un ejemplo con react donde mando por props la imfoemacion hacia el componente"
          }
        />

        <Cards
          linkimg={"https://fastly.picsum.photos/id/343/200/300.jpg?hmac=_7ttvLezG-XONDvp0ILwQCv50ivQa_oewm7m6xV2uZA"}
          titulo={"imagen 3"}
          descripcion={
            "aca un ejemplo con react donde mando por props la imfoemacion hacia el componente"
          }
        />
      </div>

      <Footers mensaje={"Imagenes de referancia galeria imagenes"} />
    </div>
  );
};

export default App;
