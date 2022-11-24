import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h2 className="Hello">Hello There</h2>
            <h1 className="first h1">We Are Glint</h1>
            <p className="firstP">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu Lorem ipsum dolor sit amet, consectetuer adipiscing
                eit. Aenean commodo ligula eget dolor. Aenean massa. Cum socis natogue penatibus et magnis dis parturient montes. nascetur
                ridiculus mus. Donec qu
            </p>
            <div className="flex">
                <div>
                    <h1 className="h1">127</h1>
                    <p>Award Recieved</p>
                </div>
                <div>
                    <h1 className="h1">1505</h1>
                    <p>Cups of Coffe</p>
                </div>
                <div>
                    <h1 className="h1">109</h1>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h1 className="h1">102</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </header>
    );
}


export default Header;