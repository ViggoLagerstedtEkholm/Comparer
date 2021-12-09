import {Form} from "react-bootstrap";
import {useContext} from "react";
import {SensitivityContext} from "./ContextProvider";

function Sensitivity() {
    const {sensitivity, setSensitivity} = useContext(SensitivityContext);

    const validate = (value) =>{
        const reg = new RegExp('^[0-9]+$');
        if(reg.test(value)){
            setSensitivity(value);
        }
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Sensitivity (minimum word length detection)</Form.Label>
                <Form.Control type="text" value={sensitivity} placeholder="Sensitivity" onChange={e => validate(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}

export default Sensitivity;
