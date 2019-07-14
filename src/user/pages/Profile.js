import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
	render() {
		return (
			<div className="col-md-12 col-lg-9  p-0">
				<div className="title_profile">
					<h1>Subscribes</h1>
				</div>
				<div className="personal_information">
					<ul className="col-sm-6 col-12 list-unstyled pl-0">
						<li>
							<span className="col-6 p-0">Имя</span> <span className="col-6 p-0">Hyston-DDG</span>
						</li>
						<li>
							<span className="col-6 p-0">Электронная почтa</span> <span className="col-6 p-0">dekka-zakaz@mail.ru</span>
						</li>
						<li>
							<span className="col-6 p-0">Телефоны</span> <span className="col-6 p-0">+7 985 980 32 02</span>
						</li>
						<li>
							<span className="col-6 p-0">Дата рождения</span> <span className="col-6 p-0">12 июня 1995</span>
						</li>
						<li>
							<span className="col-6 p-0">Пол</span> <span className="col-6 p-0">Мужской</span>
						</li>
					</ul>
					<ul className="col-sm-6 col-12 list-unstyled pl-0">
						<li>
							<Link to="/user/edit_profile" className="forgotten_password">
								Редактировать личные данные
							</Link>
						</li>
						<li>
							<Link to="/user/password" className="forgotten_password">
								Изменить пароль
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
