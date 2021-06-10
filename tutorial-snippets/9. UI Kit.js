//
// UI 1
//

// Link
export default function Link({href, children}) {
    return (<a href={href} className="ui-link">{children}</a>);
}
// Input
export default function Container({type, placeholder, name, }) {
    return (<input type={type ?? "text"} placeholder={placeholder}
    name={name} className="ui-textfield" />);
}
// Container
export default function Container({children}) {
    return (<div className="ui-container">{children}</div>);
}
// Button
export default function Button({type, disabled, children}) {
    return (<button type={type} disabled={disabled} className="ui-button">{children}</button>);
}

// Index.js
import Container from "./Container.js";
import Button from "./Button.js";
import Link from "./Link.js";
import Input from "./Input.js";

function App() {
    return (<>
        <Container>
        <Input type="email" placeholder="input" name="inputField"/>
        <Button type="submit" disabled={false}>Save</Button>
        <Link href="https://owensteele.co.uk">my site</Link>
        </Container>
    </>);
}

render(<App />, document.querySelector("#react-root"));

//
// UI 2
//

