import {Form} from "react-bootstrap";
import {useContext} from "react";
import {FilterContext} from "./ContextProvider";

function Filter() {
    const {filter, setFilter} = useContext(FilterContext);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Sensitivity (minimum word length detection)</Form.Label>
                <Form.Control type="email" value={filter} placeholder="Filter" onChange={e => setFilter(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}

export default Filter;
