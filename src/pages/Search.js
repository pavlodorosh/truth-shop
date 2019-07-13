import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import product_one from '../assets/img/product-one.jpg'
import product_two from '../assets/img/product-two.jpg'

export default class Search extends Component {
    render() {
        return (
            <div className="container-fluid search_page">
                <div className="container">
                    <div className="row">

                        <div class="title_search">
                            <h1>Поиск...</h1>
                        </div>

                        <div className="search_products">

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" >
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
                                            <a href="#">Товар товар</a>
                                        </h4>
                                        <p className="price">
                                            <span className="price-old">7 800,00 руб.</span>
                                            <span className="price-new">5 800,00 руб.</span>
                                        </p>
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
