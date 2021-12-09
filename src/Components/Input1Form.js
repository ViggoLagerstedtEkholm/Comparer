import {Form} from "react-bootstrap";

function Input1Form(props) {
    const {text, title, onInput1Change} = props;

    return (
        <Form>
            <Form.Group className="mb-3 h-100" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{title}</Form.Label>
                <Form.Control as="textarea" value={text} rows={25} onChange={e => onInput1Change(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}

export default Input1Form;
