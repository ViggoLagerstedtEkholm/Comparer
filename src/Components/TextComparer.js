import {Card, Col, Container, Row} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import Input1Form from "./Input1Form";
import Input2Form from "./Input2Form";
import Matches from "./Matches";
import {FilterContext, SelectedOptionContext, SensitivityContext} from "./ContextProvider";
import Info from "./Info";

function TextComparer() {
    const [input1, setInput1] = useState("This is the first example");
    const [input2, setInput2] = useState("This is the second example");
    const [matches, setMatches] = useState([]);

    const {selectionOption} = useContext(SelectedOptionContext);
    const {sensitivity} = useContext(SensitivityContext);
    const {filter} = useContext(FilterContext);

    useEffect(()=>{
        const words1 = input1.split(" ");
        const words2 = input2.split(" ");
        setMatches(words1.filter(element => (words2.includes(element) && element.length > sensitivity)));
    }, [input1, input2, sensitivity, selectionOption, filter])

    const onInput1Change = (text) => {
        setInput1(text);
    }

    const onInput2Change = (text) => {
        setInput2(text);
    }

    return (
        <Container className="d-flex flex-column py-3">
            <Row>
                <Col>
                  <Info/>
                </Col>
            </Row>
            <Row className="h-100">
                <Col>
                    <h1 className="text-white mt-2">Input 1</h1>
                    <Input1Form title="Title" text={input1} onInput1Change={onInput1Change}/>
                </Col>
                <Col>
                    <h1 className="text-white mt-2">Input 2</h1>
                    <Input2Form title="Title" text={input2} onInput2Change={onInput2Change}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="text-white">Matching words</h1>
                    {
                        selectionOption === 2 ?
                            <Matches text={input2} matches={matches}/>
                            :
                            <Matches text={input1} matches={matches}/>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default TextComparer;
