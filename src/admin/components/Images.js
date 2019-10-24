import React from 'react'

export default function Images() {
	return (
		<>
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
						×
					</button>
					<h4 className="modal-title">Менеджер изображений q</h4>
				</div>
				<div className="modal-body">
					<div className="row">
						<div className="col-sm-5">
							<a className="btn btn-default">
								<i className="fa fa-level-up"></i>
							</a>
							<a id="button-refresh" className="btn btn-default">
								<i className="fa fa-refresh"></i>
							</a>
							<button type="button" id="button-upload" className="btn btn-primary">
								<i className="fa fa-upload"></i>
							</button>
							<button type="button" id="button-folder" className="btn btn-default">
								<i className="fa fa-folder"></i>
							</button>
							<button type="button" className="btn btn-danger">
								<i className="fa fa-trash-o"></i>
							</button>
						</div>
						<div className="col-sm-7">
							<div className="input-group">
								<input type="text" name="search" value="" placeholder="Поиск.." className="form-control" />
								<span className="input-group-btn">
									<button type="button" id="button-search" className="btn btn-primary">
										<i className="fa fa-search"></i>
									</button>
								</span>
							</div>
						</div>
					</div>
					<hr />
					<div className="row">
						<div className="col-sm-3 col-xs-6 text-center">
							<div className="text-center">
								<a className="directory" style="vertical-align: middle;">
									<i className="fa fa-folder fa-5x"></i>
								</a>
							</div>
							<label>
								{' '}
								<input type="checkbox" name="path[]" value="catalog/demo" />
								demo
							</label>
						</div>
						<div className="col-sm-3 col-xs-6 text-center">
							<a className="thumbnail">
								<img alt="logo.png" title="logo.png" />
							</a>
							<label>
								<input type="checkbox" name="path[]" value="catalog/logo.png" />
								logo.png
							</label>
						</div>
						<div className="col-sm-3 col-xs-6 text-center">
							<a className="thumbnail">
								<img alt="logo.png" title="logo.png" />
							</a>
							<label>
								<input type="checkbox" name="path[]" value="catalog/logo.png" />
								logo.png
							</label>
						</div>
					</div>
					<br />
				</div>
				<div className="modal-footer"></div>
			</div>
		</>
	)
}
