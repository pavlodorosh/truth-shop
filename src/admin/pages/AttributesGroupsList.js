import React from 'react'
import { Link } from 'react-router-dom'

const AttributesGroupsList = () => {
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
                                        <th>Type</th>
                                        <th></th>
									</tr>
								</thead>
								<tbody>

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
