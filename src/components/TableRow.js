import TableData from "./TableData";
const TableRow = ({item}) => {
    return (
        <tr className="tr">
            {Object.entries(item).map((entry) => (
                <TableData key={JSON.stringify(entry[0])} value={entry[1]} />
            ))}
        </tr>
    )
}
export default TableRow;