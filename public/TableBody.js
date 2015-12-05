import React from "react"

class TableBody extends React.Component{
	render(){
		let keys = Object.keys(this.props.data[0]);
		let rows = this.props.data;
		rows = rows.map( row => {
			let values = keys.map( key => {
				return <td>{ row[key] } </td>
			})
			return <tr> {values} </tr>
		})
		return(
			<tbody>
				{rows}
			</tbody>
		)
	}
}

export default TableBody
