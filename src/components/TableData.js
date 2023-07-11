const TableData = ({value}) => {
    return (    
        // console.log({value})
        <td className="tableData">
            {JSON.stringify(value)}
        </td>
    )
}
export default TableData;