import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../firebase'

const AttributesGroupsList = () => {

	const [groups, getGroups] = useState(null)

	useEffect(()=>{
		database.ref('/groups').on('value', snapshot => {
			getGroups(snapshot.val())			
		})
	})

	const removeGroupFromDatabase = (id) => {
		database
			.ref('/groups')
			.child(id)
			.remove()
	}

    return (
        <div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-6">
								<div className="row">
									<h3 className="panel-title">Attributes Groups</h3>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<table className="table table-striped table-bordered table-list">
								<thead>
									<tr>
                                        <th>Name</th>
                                        <th>Attributes</th>
                                        <th></th>
									</tr>
								</thead>
								<tbody>
									{
										groups && 
											Object.keys(groups).map((id) => (
												<tr>
													<td>{groups[id].name}</td>
													<td>{Object.keys(groups[id].attributes).map((el)=>(
														<span>{groups[id].attributes[el]}, </span>
													))}</td>
													<td>
														{
															<button onClick={()=>{removeGroupFromDatabase(id)}}>X</button>
														}	
													</td>
												</tr>
											))
									}
								</tbody>
							</table>
							<Link to="/admin/add/group"><button>Add New Group</button></Link>
						</div>
					</div>
				</div>
			</div>
    )
}

export default AttributesGroupsList
