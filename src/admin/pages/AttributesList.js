import React, {useContext}  from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { adminData } from './Admin'

const Attributes = () => {
	const data = useContext(adminData)

    return (
        <div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-6">
								<div className="row">
									<h3 className="panel-title">Attributes List</h3>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<table className="table table-striped table-bordered table-list">
								<thead>
									<tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        {/* <th></th> */}
									</tr>
								</thead>
								<tbody>
									{
										data.systemAttributes.map(element => {
											return (
												<tr>
													<td>{element.label}</td>
													<td>System</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
    )
}

export default Attributes