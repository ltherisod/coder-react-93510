import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Item = ({prod}) => {
  const navigate = useNavigate()
  return (
    // <Link to={`/item/${prod.id}`}>
    <Card style={{ width: '18rem' }}>
  {/* //  <Card style={{ width: '18rem' }} onClick={()=> navigate(`/item/${prod.id}`)} > */}
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
         ${prod.price}
        </Card.Text>
        {/* <Button variant="primary" onClick={()=> navigate(`/item/${prod.id}`)}>Ver Más</Button> */}
        {/* TRADICIONAL */}
        {/* <Link className='btn btn-primary' to={'/item/' + prod.id}>Ver Más</Link> */}
        {/* SUGAR SYNTAX */}
        <Link className='btn btn-primary' to={`/item/${prod.id}`}>Ver Más</Link>
      </Card.Body>
    </Card>
    // </Link>
  )
}

export default Item