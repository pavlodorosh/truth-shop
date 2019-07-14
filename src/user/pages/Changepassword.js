import React, { Component } from 'react'

export default class Changepassword extends Component {
	render() {
		return (
			<div className="col-md-12 col-lg-9  p-0">
				<div className="title_password">
					<h1>Смена пароля</h1>
				</div>
				<div class="form_reg">
					<form class="form-horizontal">
						<div class="form-group required">
							<label class="col-sm-3 control-label">Введите старый пароль</label>
							<div class="col-sm-9">
								<input type="password" name="password" value="" placeholder="Password" id="input-email" class="form-control" />
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-3 control-label">Придумайте новый пароль</label>
							<div class="col-sm-9">
								<input type="password" name="password" value="" placeholder="Password" id="input-email" class="form-control" />
							</div>
						</div>
						<div class="form-group required">
							<label class="col-sm-3 control-label">Новый пароль еще раз</label>
							<div class="col-sm-9">
								<input type="password" name="password" value="" placeholder="Password" id="input-email" class="form-control" />
							</div>
						</div>

						<div class="buttons clearfix">
							<div class="float-right">
								<a href="/profile.php" class="btn btn-login">
									Сохранить
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
