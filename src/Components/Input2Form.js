import {Form} from "react-bootstrap";

function Input2Form(props) {
    const {text, title, onInput2Change} = props;

    return (
        <Form>
            <Form.Group className="mb-3 h-100" controlId="exampleForm.ControlTextarea2">
                <Form.Label>{title}</Form.Label>
                <Form.Control as="textarea" rows={25} value={text} onChange={e => onInput2Change(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}

export default Input2Form;
