import { Button } from "./Button.comp";


export const Header = ({title, onAddClose, addCloseTask}) => {
    // const onClick = (e) => {
    //     console.log(e);
    // }
  return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={addCloseTask ? 'Red' : 'Green'} text={addCloseTask ? 'Close' : 'Add'} onClick={onAddClose}/>
           
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}
