import { Button } from "./Button.comp"


export const Header = ({title}) => {
    const onClick = (e) => {
        console.log(e);
    }
  return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Click" onClick={onClick}/>
           
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}
