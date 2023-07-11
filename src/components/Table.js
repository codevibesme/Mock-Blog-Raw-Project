import TableRow from './TableRow';
// import TableHeading from './TableHeading';
const Table = ({items}) => {
    return( 
        <table className="table">
            <tbody>
                {items.map(item => 
                    (
                        <TableRow key={item.id} item = {item} />
                    )
                )}
            </tbody>
        </table>
    );

}
export default Table;