import React, { Component } from 'react'

export default class Reg extends Component {
	render() {
		return (
			<div className="container-fluid reg_page">
				<div className="container">
					<div className="row">
						<div className="title_reg">
							<h1>Регистрацыя</h1>
						</div>

						<div className=" form_reg">
							<div className="form-horizontal">
								<div className="col-sm-7 p-0">
									<fieldset id="account" className="col-sm-6">
										<legend>Основные данные</legend>
										<div className="form-group required">
											<input type="text" name="firstname" value="" placeholder="Имя*" id="input-firstname" className="form-control" />
										</div>
										<div className="form-group required">
											<input type="text" name="lastname" value="" placeholder="Фамилия*" id="input-lastname" className="form-control" />
										</div>
										<div className="form-group required">
											<input type="email" name="email" value="" placeholder="Mail*" id="input-email" className="form-control" />
										</div>
										<div className="form-group required">
											<input type="tel" name="telephone" value="" placeholder="Телефон*" id="input-telephone" className="form-control" />
										</div>

										<div className="form-group required">
											<input type="password" name="password" value="" placeholder="Пароль*" id="input-password" className="form-control" />
										</div>
										<div className="form-group required">
											<input type="password" name="confirm" value="" placeholder="Подтверждение пароля*" id="input-confirm" className="form-control" />
										</div>
									</fieldset>
									<fieldset className="col-sm-6">
										<legend>Рассылка</legend>
										<div className="form-group flex-column">
											<label className="control-label">Подписка на новости</label>
											<label className="radio-inline">
												<input type="radio" name="newsletter" value="1" />
												Да
											</label>
											<label className="radio-inline">
												<input type="radio" name="newsletter" value="0" checked="checked" />
												Нет
											</label>
										</div>
										<div className="buttons">
											<p>
												<input type="checkbox" name="agree" value="1" />Я прочитал{' '}
												<a href="/policy.php" className="forgotten_password">
													{' '}
													<b>Пользовательское соглашение</b>{' '}
												</a>{' '}
												и согласен с условиями безопасности и обработки персональных данных
											</p>
											<a href="/profile.php" className="btn btn-login float-right">
												Войти
											</a>
										</div>
									</fieldset>
								</div>
								<div class="col-sm-5">
									<fieldset>
										<legend>Связь с социальными сетями</legend>
										<div class="form-group">
											<label class="control-label">Вы можете зарегистрироваться на «Dekka» с помощью учетных записей социальных сетей</label>
											<div class="row">
												<div class="form-group col-12 ">
													<a href="https://www.facebook.com" class="btn facebook" target="_blank">
														Войти через Facebook
													</a>
												</div>
												<div class="form-group col-12">
													<a href="https://myaccount.google.com/intro" class="btn google" target="_blank">
														Войти через Google
													</a>
												</div>
											</div>
										</div>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
