import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Forgotten extends Component {
	render() {
		return (
			<div className="container-fluid forgotten">
				<div className="container">
					<div className="row">
						<div className="title_forgotten">
							<h1>Личный кабинет</h1>
						</div>
						<div className="col-sm-6">
							<p>Введите E-Mail Вашей учетной записи. Нажмите кнопку Вперед, чтобы получить пароль по электронной почте.</p>
						</div>
						<div className="col-sm-6">
							<form className="form-horizontal">
								<fieldset>
									<div className="form-group required">
										<div className="col-sm-12">
											<input type="text" name="email" value="" placeholder="Эл. почта или телефон" id="input-email" className="form-control" />
										</div>
									</div>
								</fieldset>
								<div className="buttons clearfix">
									<div className="pull-right">
										<a href="/login.php" className="btn btn-login float-right" data-toggle="modal" data-target="#exampleModalCenter">
											Продолжить
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
