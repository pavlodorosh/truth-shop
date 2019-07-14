import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'
import product_one from '../assets/img/product-one.jpg'
import product_two from '../assets/img/product-two.jpg'

class Cart extends Component {
	render() {
		return (
			<div className="container-fluid cart">
				<div className="container">
					<div className="col-lg-12 cart_block_product">
						<div className="d-lg-flex cart_header d-none">
							<div className="col-lg-5">Товар</div>
							<div className="col-lg-1">Цвет</div>
							<div className="col-lg-1">Размер</div>
							<div className="col-lg-2">Количество</div>
							<div className="col-lg-2">Цена</div>
							<div className="col-lg-1">Удалить</div>
						</div>
						<div className="cart_block_product_list">
							<div className="product_img col-lg-3 col-md-3 col-sm-4 col-6">
								<img src={product_two} alt="" title="" className="img-fluid" />
							</div>
							<div className="row col-md-9 col-sm-8 col-6 p-0">
								<div className="col-lg-3 col-md-12 col-sm-12 col-12 product_name  ">
									<span>Пальто Dekka </span>
								</div>
								<div className="row col-lg-3 col-md-4 col-sm-4 p-0 m-0">
									<div className=" col-sm-6 option_color">
										<span />
									</div>
									<div className="col-sm-6 size ">
										<span>XS</span>
									</div>
								</div>
								<div className="form-group col-lg-3 col-md-4 col-sm-4 col-12 ">
									<div className="product_quantity  ">
										<a href="#" className="sf_minus" rel="nofollow">
											-
										</a>
										<input type="text" className="sf_base_quantity" name="quantity" value="1" />
										<a href="#" className="sf_plus" rel="nofollow">
											+
										</a>
									</div>
								</div>
								<div className="col-lg-2 col-12 price col-md-4 col-sm-4 ">
									<span className="price_old">5 500,00 руб</span>
									<span className="price_new">5 500,00 руб</span>
								</div>
								<div className="col-lg-1 col-sm-1 col-1 cancel ">
									<span class="lnr lnr-cross-circle" />
								</div>
							</div>
						</div>
						<div className="cart_block_product_list ">
							<div className="product_img col-lg-3 col-md-3 col-sm-4 col-6">
								<img src={product_one} alt="" title="" className="img-fluid" />
							</div>
							<div className="row col-md-9 col-sm-8 col-6 p-0">
								<div className="col-lg-3 col-md-12 col-sm-12 col-12 product_name  ">
									<span>Пальто Dekka </span>
									<br />
									зимнее арт. 1479
								</div>
								<div className="row col-lg-3 col-md-4 col-sm-4 p-0 m-0">
									<div className=" col-sm-6 option_color">
										<span />
									</div>
									<div className="col-sm-6 size ">
										<span>XS</span>
									</div>
								</div>
								<div className="form-group col-lg-3 col-md-4 col-sm-4 col-12 ">
									<div className="product_quantity  ">
										<a href="#" className="sf_minus" rel="nofollow">
											-
										</a>
										<input type="text" className="sf_base_quantity" name="quantity" value="1" />
										<a href="#" className="sf_plus" rel="nofollow">
											+
										</a>
									</div>
								</div>
								<div className="col-lg-2 col-12 price col-md-4 col-sm-4 ">
									<span className="price_old">5 500,00 руб</span>
									<span className="price_new">5 500,00 руб</span>
								</div>
								<div className="col-lg-1 col-sm-1 col-1 cancel ">
									<span class="lnr lnr-cross-circle" />
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-12 cart_block_content">
						<div className="col-md-6 col-12">
							<div className="cart_block_content_info_client">
								<div className="d-flex  cart_block_content_header">Личные данные</div>

								<div className="col-lg-12 login">Уже зарегистрировались? Войти!</div>
								<div className="col-lg-6">
									<input placeholder="Фамилия, имя, отчество" />
								</div>
								<div className="col-lg-6">
									<input placeholder="Электронная почта" />
								</div>
								<div className="col-lg-6">
									<input placeholder="Телефон для связи" />
								</div>
								<div className="col-lg-6">
									<input placeholder="Пароль для учетной записи" />
								</div>
							</div>

							<div className="cart_block_content_delivery">
								<div className="d-flex content_delivery_header "> Доставка</div>

								<ul className="nav nav-tabs delivery_tabs">
									<li className="active">
										<a className="active" data-toggle="tab" href="#pane1">
											Пункт самовывоза <span>0 руб.</span>
										</a>
									</li>
									<li>
										<a data-toggle="tab" href="#pane2">
											Почта России <span>от 400 руб.</span>
										</a>
									</li>
									<li>
										<a data-toggle="tab" href="#pane3">
											Курьерская служба <br />
											(на Ваш выбор)
											<span>
												в зависимости
												<br />
												от тарифов службы
											</span>
										</a>
									</li>
								</ul>

								<div className="delivery_tab_content">
									<div id="pane1" className="tab-pane fade in active show">
										<button data-toggle="modal" data-target="#Modalshop" className="del">
											пункты выдачи
										</button>
									</div>

									<div className="modal fade" id="Modalshop" tabindex="-1" role="dialog" aria-labelledby="Modalshop" aria-hidden="true">
										<div className="modal-dialog modal-dialog-centered" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLongTitle">
														Пункты Выдачи
													</h5>
													<button type="button" className="close" data-dismiss="modal" aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<div className="tab-content" id="tab-content">
														<iframe
															src="https://yandex.ru/map-widget/v1/?um=constructor%3A35980e7bb44251b3425ff9b614924c3db4232839a3deba98b31d0c61cf5895a1&amp;source=constructor"
															width="100%"
															height="383"
															frameborder="0"
														/>
														<ul className="list-unstyled del_list">
															<li>Адрес: Москва, Автозаводская улица, д.6 тел: +7 985 980 32 02</li>
															<li>Адрес: Москва, Автозаводская улица, д.6 тел: +7 985 980 32 02</li>
															<li>Адрес: Москва, Автозаводская улица, д.6 тел: +7 985 980 32 02</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div id="pane2" className="tab-pane fade adress">
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Округ/регион" />
										</div>
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Город*" />
										</div>
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Улица*" />
										</div>
										<div className="form-group d-flex">
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Дом*" />
											</div>
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Кв*" />
											</div>
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Корпус" />
											</div>
											<div className="form-group col-sm-3 p-0">
												<input className="col-sm-12" type="text" placeholder="Строение" />
											</div>
										</div>
									</div>

									<div id="pane3" className="tab-pane fade adress">
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Округ/регион" />
										</div>
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Город*" />
										</div>
										<div className="form-group">
											<input className="col-sm-12" type="text" placeholder="Улица*" />
										</div>
										<div className="form-group d-flex">
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Дом*" />
											</div>
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Кв*" />
											</div>
											<div className="form-group col-sm-3 p-0 pr-1">
												<input className="col-sm-12" type="text" placeholder="Корпус" />
											</div>
											<div className="form-group col-sm-3 p-0">
												<input className="col-sm-12" type="text" placeholder="Строение" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-12">
							<div className="cart_block_content_pay_cart">
								<div className="d-flex cart_block_content_header"> Оплата</div>

								<ul className="list-unstyled cart_block_content_list">
									<li>
										<a href="#">Наличными при получении</a>
									</li>
									<li>
										<a href="#">
											Картой на сайте
											<img src="/img/pay.png" />
										</a>
									</li>
								</ul>
							</div>

							<div className="cart_block_content_pay">
								<ul className="list-unstyled total">
									<li>
										Стоимость товаров: <span>11 000,00 руб</span>
									</li>
									<li>
										Доставка: <span>0 руб</span>
									</li>
									<li className="promo">
										<input type="text" />
										<button type="button" className="button-basket">
											Добавить промокод
										</button>
									</li>
									<li>
										Итого к оплате: <span>11 000,00 руб</span>
									</li>
								</ul>
							</div>

							<div className="cart_block_content_bay">
								<p className="info">
									Продолжая вы даёте ООО «Приват Трэйд» своё согласие на обработку персональных данных и подтверждаете что ознакомились с Условиями продажи и Порядком обработки
									персональных данных.
								</p>
								<button type="button" className="button-basket">
									оформить заказ
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Cart
