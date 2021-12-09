import Highlighter from "react-highlight-words";
import {Card} from "react-bootstrap";
import InputOption from "./InputOption";
import {useContext} from "react";
import {FilterContext, SelectedOptionContext, SensitivityContext} from "./ContextProvider";
import Sensitivity from "./Sensitivity";
import Filter from "./Filter";

function Matches(props) {
    const {text, matches} = props;

    const {selectionOption} = useContext(SelectedOptionContext);
    const {filter} = useContext(FilterContext);
    const {sensitivity} = useContext(SensitivityContext);

    let doFilter = false;
    if(filter.length > sensitivity){
        doFilter = true;
    }

    return (
        <Card className="p-3">
            <Card.Header>
                <InputOption/>
                <Sensitivity/>
                <Filter/>
                <Card.Title>Showing input {selectionOption}</Card.Title>
            </Card.Header>
            <Card.Body>

                {text ? <Highlighter
                    highlightClassName="highlight"
                    searchWords={doFilter ? [filter] : matches }
                    autoEscape={true}
                    textToHighlight={text}
                /> : <h4>Enter inputs</h4>}
            </Card.Body>
        </Card>
    );
}

export default Matches;
