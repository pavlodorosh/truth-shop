import React, { Component } from 'react'

export default class Subscribes extends Component {
	render() {
		return (
			<div className="col-md-12 col-lg-9  p-0">
				<div className="title_subscribe">
					<h1>Subscribes</h1>
				</div>
				<div className="personal_subscribes">
					<ul className="col-12 list-unstyled">
						<li>
							<input type="checkbox" id="subscribe1" name="fruit-1" value="Apple" />
							<label for="subscribe1">
								<div className="profile-subscribes-i-info">
									<span className="profile-subscribes-i-title">Новости, акции компании</span>
									<p className="profile-subscribes-i-note">Будьте в курсе всех событий магазина, просматривайте обзоры.</p>
								</div>
							</label>
						</li>
						<li>
							<input type="checkbox" id="subscribe2" name="fruit-1" value="Apple" />
							<label for="subscribe2">
								<div className="profile-subscribes-i-info">
									<span className="profile-subscribes-i-title">Информация об акциях, промокодах и скидках</span>
									<p className="profile-subscribes-i-note">
										Периодически мы проводим акции со скидками, розыгрышами, промокодами и прочими инструментами, которые могут помочь вам сэкономить на покупке, подобрать подарок
										себе или близким. Мы обязательно сообщим вам о таких кампаниях, и вы сможете покупать по самым лучшим ценам.
									</p>
								</div>
							</label>
						</li>
						<li>
							<input type="checkbox" id="subscribe3" name="fruit-1" value="Apple" />
							<label for="subscribe3">
								<div className="profile-subscribes-i-info">
									<span className="profile-subscribes-i-title">Персональные скидки и предложения</span>
									<p className="profile-subscribes-i-note">
										Мы сообщим вам, если у нас появится скидка на товар, которым вы интересовались, товар, который вы добавили в список желаний, или товар, который подобрала наша
										рекомендационная система.
									</p>
								</div>
							</label>
						</li>
					</ul>
					<ul className="col-12 list-unstyled">
						<strong>Сообщения отправляются по следующим каналам:</strong>
						<li>
							<input type="checkbox" id="subscribe4" name="fruit-1" value="Apple" />
							<label for="subscribe4">
								<div className="profile-subscribes-i-info">
									<span className="profile-subscribes-i-title">Email-письма</span>
								</div>
							</label>
						</li>
						<li>
							<input type="checkbox" id="subscribe5" name="fruit-1" value="Apple" />
							<label for="subscribe5">
								<div className="profile-subscribes-i-info">
									<span className="profile-subscribes-i-title">Сообщения в Viber</span>
								</div>
							</label>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
