import {Card} from "react-bootstrap";

export function Info(){
    return(
        <Card className="bg-info text-black-50">
            <Card.Body>
                <Card.Title>
                    Info
                </Card.Title>
                <Card.Text>
                    Compare two texts and find similarities and differences.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Info;