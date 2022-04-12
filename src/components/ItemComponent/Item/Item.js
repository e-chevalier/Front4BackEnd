import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col'
import { useCartContext } from "../../../context/CartContext"

const Item = ({ prod }) => {

    const { addItem } = useCartContext()

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={prod.thumbnail} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item