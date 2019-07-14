import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
	render() {
		return (
			<div className="container-fluid login_page">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<div className="well">
								<h2>Новый покупатель</h2>
								<p>
									<strong>Регистрация</strong>
								</p>
								<p>
									Создание учётной записи поможет делать покупки быстрее и удобнее. Вы также сможете отслеживать статус своего заказа, пользоваться закладками, видеть свои предыдущие
									заказы или получить скидку как наш постоянный покупатель.
								</p>
								<Link to="/registration" className="forgotten_password">
									Продолжить
								</Link>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="well">
								<h2>Постоянный покупатель</h2>
								<p>
									<strong>Я совершал здесь покупки ранее и регистрировался</strong>
								</p>
								<form className="needs-validation" novalidate="">
									<div className="form-row">
										<div className="form-group col-12">
											<label for="validationCustom01">Эл. почта или телефон</label>
											<input type="text" className="form-control" id="validationCustom01" placeholder="Эл. почта или телефон" value="" required="" />
											<div className="invalid-feedback">Адрес недоступен для авторизации!</div>
										</div>
										<div className="form-group col-12">
											<label for="validationCustom03">Пароль</label>
											<input type="text" className="form-control" id="validationCustom03" placeholder="Пароль" required="" />
											<div className="invalid-feedback">Ошибка! неверный пароль!</div>
											<span className="login_buton">
												<Link to="/login/forgotten" className="forgotten_password">
													Забыли пароль?
												</Link>
												<button className="btn btn-login float-right" type="submit">
													Войти
												</button>
											</span>
										</div>
									</div>
								</form>
								<div className="login-or">
									<hr className="hr-or" />
									<span className="span-or">или</span>
								</div>
								<div className="row">
									<div className="col-xs-6 col-sm-6 col-md-6 ">
										<a href="https://www.facebook.com" className="btn facebook" target="_blank">
											Войти через Facebook
										</a>
									</div>
									<div className="col-xs-6 col-sm-6 col-md-6 ">
										<a href="https://myaccount.google.com/intro" className="btn google" target="_blank">
											Войти через Google
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
