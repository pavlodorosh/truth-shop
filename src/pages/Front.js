import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import women from '../assets/img/shop_1.jpg'
import accessories from '../assets/img/shop_2.jpg'
import men from '../assets/img/shop_3.jpg'

import Slider from 'react-slick'
import slide1 from '../assets/img/slider1-1.png'
import slide2 from '../assets/img/slider1-2.png'

import product_one from '../assets/img/product-one.jpg'
import product_two from '../assets/img/product-two.jpg'

class Front extends Component {
	render() {
		var slidefront = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		}
		var slideproduct = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			rows: 3,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						rows: 2
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						rows: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						rows: 1
					}
				}
			]
		}

		return (
			<>
				<div className="container-fluid slide_content">
					<div className="row-block">
						<Slider {...slidefront}>
							<div class="single-slide">
								<div class="slider-sigle slider-right">
									<img src={slide2} alt="Slider Image" />
								</div>
								<div class="slider-sigle slider-left">
									<div class="slider-content__inner">
										<h1 class="heading__primary mb--2r5 mb-xs--1r5">
											<span class="heading__primary--main">Зручно&amp; зажди </span>
											<span class="heading__primary--sub">Одяг для йоги і спортзалу </span>
										</h1>
										<a href="#" class="btn" tabindex="0">
											Купить
										</a>
									</div>
								</div>
							</div>
							<div class="single-slide">
								<div class="slider-sigle slider-right">
									<img src={slide1} alt="Slider Image" />
								</div>
								<div class="slider-sigle slider-left">
									<div class="slider-content__inner">
										<h1 class="heading__primary mb--2r5 mb-xs--1r5">
											<span class="heading__primary--main">Зручно&amp; зажди </span>
											<span class="heading__primary--sub">Одяг для йоги і спортзалу </span>
										</h1>
										<a href="#" class="btn" tabindex="0">
											Купить
										</a>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>

				<div className="container-fluid category">
					<div className="row">
						<div className="container">
							<div className="row">
								<div className="front_block col-lg-4 col-md-4">
									<Link to="/women">
										<img alt="" className="img-fluid" src={women} />
									</Link>

									<span className="category_name ">
										<Link to="/women">Женщины</Link>
									</span>
									<span className="catygory_link ">
										<Link to="/women">Купить </Link>
									</span>
								</div>
								<div className="front_block col-lg-4 col-md-4">
									<Link to="/accessories">
										<img alt="" className="img-fluid" src={accessories} />
									</Link>

									<span className="category_name">
										<Link to="/accessories">Аксесуари</Link>
									</span>
									<span className="catygory_link ">
										<Link to="/accessories">Купить </Link>
									</span>
								</div>
								<div className="front_block col-lg-4 col-md-4">
									<Link to="/men">
										<img alt="" className="img-fluid" src={men} />
									</Link>

									<span className="category_name ">
										<Link to="/men">Мужчины</Link>
									</span>
									<span className="catygory_link ">
										<Link to="/men">Купить </Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid news-products">
					<div className="row">
						<div className="container links">
							<h2>НОВИНКИ</h2>
							<ul className="list-product">
								<li className="active">Пусери</li>
								<li>Шорти</li>
								<li>Аксесуари</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="container products">
							<div className="row-block">
								<Slider {...slideproduct}>
									<div className="product-layout col-xs-12">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>

									<div className="product-layout col-xs-12">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>

									<div className="product-layout col-xs-12">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>

									<div className="product-layout col-xs-12">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
									<div className="product-layout col-xs-12 ">
										<div className="product-thumb">
											<div className="image">
												<div className="new">Новинка</div>
												<div className="color_arr">
													<span className="color" />
													<span className="color" />
												</div>
												<div className="wishlist">
													<span class="lnr lnr-heart" />
												</div>
												<a href="/product.php">
													<img alt="" className="one" src={product_one} />
													<img alt="" className="two" src={product_two} />
												</a>
											</div>
											<div className="caption">
												<h4>
													<a href="#">Назва товар</a>
												</h4>
												<p className="price">
													<span className="price-old">7 800,00 грн.</span>
													<span className="price-new">5 800,00 грн.</span>
												</p>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Front
