import React, { Component } from 'react'

import product_one from '../../assets/img/product-one.jpg'
import product_two from '../../assets/img/product-two.jpg'

export default class Orderuser extends Component {
	render() {
		return (
			<div className="col-md-12 col-lg-9  p-0">
				<div className="title_order">
					<h1>Subscribes</h1>
				</div>
				<div className="orders_list">
					<div className="order_information">
						<div className="order_list col-12 p-0">
							<div className="order_item">
								<div className="col-md-9 d-flex">
									<div className="col-md-4 p-0">№ 1 Выполнен</div>
									<div className="col-md-4 p-0">12 января 2019 14:00</div>
									<div className="col-md-4 p-0">1 товар на 7000 руб</div>
								</div>
								<div className="col-md-3 full_info">
									<a data-toggle="collapse" href="#orderdata" role="button" aria-expanded="false" aria-controls="orderdata">
										Полная информация
									</a>
								</div>
								<div className="col-12 p-0 collapse" id="orderdata">
									<div className="order_info ">
										<ul className="list-unstyled col-sm-6 p-0">
											<li>
												<span className="col-6 p-0">Способ оплаты:</span> <span className="col-6 p-0">Наличными при получении</span>
											</li>
											<li>
												<span className="col-6 p-0">Способ доставки:</span> <span className="col-6 p-0">Почта России</span>
											</li>
											<li>
												<span className="col-6 p-0">Имя и фамилия:</span> <span className="col-6 p-0">Hyston-DDG</span>
											</li>
											<li>
												<span className="col-6 p-0">Телефон:</span> <span className="col-6 p-0">+7 985 980 32 02</span>
											</li>
											<li>
												<span className="col-6 p-0">Эл. почта:</span> <span className="col-6 p-0">dekka-zakaz@mail.ru</span>
											</li>
											<li>
												<span className="col-6 p-0">Доставка:</span> <span className="col-6 p-0">Почта России 400 руб</span>
											</li>
											<li>
												<span className="col-6 p-0">Итого к оплате:</span> <span className="col-6 p-0">7400 руб</span>
											</li>
										</ul>
										<ul className="list-unstyled col-12 p-0">
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="order_information">
						<div className="order_list col-12 p-0">
							<div className="order_item">
								<div className="col-md-9 d-flex">
									<div className="col-md-4 p-0">№ 1 Выполнен</div>
									<div className="col-md-4 p-0">12 января 2019 14:00</div>
									<div className="col-md-4 p-0">1 товар на 7000 руб</div>
								</div>
								<div className="col-md-3 full_info">
									<a data-toggle="collapse" href="#orderdata2" role="button" aria-expanded="false" aria-controls="orderdata">
										Полная информация
									</a>
								</div>
								<div className="col-12 p-0 collapse" id="orderdata2">
									<div className="order_info ">
										<ul className="list-unstyled col-sm-6 p-0">
											<li>
												<span className="col-6 p-0">Способ оплаты:</span> <span className="col-6 p-0">Наличными при получении</span>
											</li>
											<li>
												<span className="col-6 p-0">Способ доставки:</span> <span className="col-6 p-0">Почта России</span>
											</li>
											<li>
												<span className="col-6 p-0">Имя и фамилия:</span> <span className="col-6 p-0">Hyston-DDG</span>
											</li>
											<li>
												<span className="col-6 p-0">Телефон:</span> <span className="col-6 p-0">+7 985 980 32 02</span>
											</li>
											<li>
												<span className="col-6 p-0">Эл. почта:</span> <span className="col-6 p-0">dekka-zakaz@mail.ru</span>
											</li>
											<li>
												<span className="col-6 p-0">Доставка:</span> <span className="col-6 p-0">Почта России 400 руб</span>
											</li>
											<li>
												<span className="col-6 p-0">Итого к оплате:</span> <span className="col-6 p-0">7400 руб</span>
											</li>
										</ul>
										<ul className="list-unstyled col-12 p-0">
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
											<li>
												<a href="/product.php">
													<img alt="" className="two" src={product_two} />
												</a>
												<a href="/product.php">Пальто Dekka зимнее арт. 1479</a>1 шт: 7000 руб
											</li>
										</ul>
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
