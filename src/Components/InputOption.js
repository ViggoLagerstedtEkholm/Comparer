import {Dropdown} from "react-bootstrap";
import {useContext} from "react";
import {SelectedOptionContext} from "./ContextProvider";

function InputOption() {
    const {selectionOption, setSelectedOption} = useContext(SelectedOptionContext);

    return (
        <Dropdown className="mb-3">
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Display options
            </Dropdown.Toggle>

            {
                selectionOption === 2 ?
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSelectedOption(2)}>See matching from input 2</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedOption(1)}>See matching from input 1</Dropdown.Item>
                    </Dropdown.Menu> :
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSelectedOption(1)}>See matching from input 1</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedOption(2)}>See matching from input 2</Dropdown.Item>
                    </Dropdown.Menu>
            }
        </Dropdown>
    );
}

export default InputOption;
