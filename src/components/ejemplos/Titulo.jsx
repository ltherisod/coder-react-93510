import banner from "../assets/react-banner.webp"
import "./titulo.css"

const Titulo = ({ titulo }) => {

  return (
    <div className="titulo" >
      <img src={banner} alt="" />
      <h2 className="titulo-h2">{titulo}</h2>
    </div>
  )
}

export default Titulo