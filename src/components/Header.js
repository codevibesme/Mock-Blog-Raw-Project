const Header = ({setPathName, handlePathChange}) => {
    const onClickEvent = (e) =>{
        setPathName(e.target.id);
    }
    return (
        <header>
            <button 
                tabIndex="0"
                id="users"
                autoFocus 
                className="btns"
                onClick={onClickEvent}> 
                users
            </button>
            <button 
                className="btns"
                id="posts"
                onClick={onClickEvent} > 
                posts
            </button>
            <button
                className="btns"
                id="comments"
                onClick={onClickEvent} > 
                comments
            </button>
        </header>
    );
}
export default Header;