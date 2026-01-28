import Left from "../Left";
import Center from "../Center";
import Right from "../Right";
import classes from "./Header.module.css"

function Header () {
return (
    <header>
        <Left />
        <Center />
        <Right />
    </header>
);
};

export default Header;