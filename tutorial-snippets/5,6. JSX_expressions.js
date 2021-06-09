// JSX interpolation ("Navbar")

function getNavbar(user) {
    return <div>Logged in as {user.name}. Log out</div>;
}

// sample usage (do not modify)
const element = getNavbar({
    name: "Sam",
    age: 34
});

//  JSX with Collections

function getNotifications(notifications) {
    return <p>You have {notifications.length} new notifications</p>;
}

// sample usage (do not modify)
const notifications = [{
    id: 1,
    text: "Your order has been delivered"
}, {
    id: 2,
    text: "Your coupon code has expired"
}];

// mutliple interpolation with objectss

function getNavbar(user) {
    return <div>Logged in as {user.firstName} {user.lastName}. Log out</div>
}

// sample usage (do not modify)
const element = getNavbar({
    firstName: "Sam",
    lastName: "Dung",
    age: 27
});

// Dynamic

function getPaymentButton(user) {
    let name = "disabled";
    if (user.is_loggedin) {
        name = "clickable";
    }
    return <button className={name}>Pay</button>;
}

// sample usage (do not modify)
const user = {
    id: 1,
    is_loggedin: true
}

// template strings with interpolation

function getPaymentMethod(name) {
    return <li className={`payment-method option-${name}`}>{name}</li>;
}

// JSX children

function getPaymentMethods() {
    let pm = "payment-method";
    return (
        <select className={`${pm}s`}>
            <option className={pm}>Card</option>
            <option className={pm}>Paypal</option>
            <option className={pm}>Cash on delivery</option>
        </select>
    );
}

function getDropdownMenu() {
    return (
       <ul id="dropdown-menu" className="dropdown">
         <li>Profile</li>
         <li>Orders</li>
         <li className="separator"></li>
         <li>Logout</li>
     </ul>
    );
   }

// self-closing required

function getUserAvatar(path) {
    return (<img src={path} />);
}

// fragments

function getFooter() {
    return (
        <>
            <h3>Your online supermarket</h3>
            <ul>
                <li>Contact</li><li>Press</li><li>About</li>
            </ul>
            <p>All rights reserved &copy;</p>
        </>
    );
}

// null coalescing

function Button(props){
    return <button className={`btn-${props.size ?? "medium"}`}>Text here</button>;
}

const root = document.querySelector("#react-root");
render(<Button size="small" />, root);

// props children

function Button(props){
    return <button>{props.children}</button>;
}

const root = document.querySelector("#react-root");
render(<Button>Login</Button>, root);

// destructuring

function Button(props){
    const {className, children} = props;
    return <button className={className}>{children}</button>;
}
// OR
function Button({className, children}){
    return <button className={className}>{children}</button>;
}

const root = document.querySelector("#react-root");

render(<Button className="primary">Login</Button>, root);

