import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Item = ({prod}) => {
  const navigate = useNavigate()
  return (
    // <Link to={`/item/${prod.id}`}>
    <Card className='shadow-sm' style={{ width: '18rem' }}>
  {/* //  <Card style={{ width: '18rem' }} onClick={()=> navigate(`/item/${prod.id}`)} > */}
      <Card.Img
        variant="top"
        src={prod.img}
        alt={prod.name}
        className='bg-body-tertiary p-3'
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text className='fs-5 fw-bold text-primary'>
         ${prod.price},00
        </Card.Text>
        {/* <Button variant="primary" onClick={()=> navigate(`/item/${prod.id}`)}>Ver Más</Button> */}
        {/* TRADICIONAL */}
        {/* <Link className='btn btn-primary' to={'/item/' + prod.id}>Ver Más</Link> */}
        {/* SUGAR SYNTAX */}
        <Link className='btn btn-primary mt-auto' to={`/item/${prod.id}`}>Ver Más</Link>
      </Card.Body>
    </Card>
    // </Link>
  )
}

export default Item