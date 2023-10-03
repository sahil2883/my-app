import Card from 'react-bootstrap/Card';

interface childrenProps {
    children:JSX.Element
}

function CardsData({children}:childrenProps) {
    
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default CardsData;