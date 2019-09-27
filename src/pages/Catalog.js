import React, {useContext, useState, useEffect}  from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'
import Filter from '../components/Filter'

const Catalog = (props) => {

	const [products, getProducts] = useState([])

	useEffect(()=>{
		database.ref('/products').on('value', snapshot => {
			getProducts(snapshot.val())
		}
	)})

	const renderProducts = () => {
		if (products !== null) {
			let generateArray = Object.values(products)
			let array = generateArray.filter(product => product.active)
			return array.map((item, index) => (
				<div className="product-layout col-xs-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
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
							<Link to={`/product/${props.match.params.parentCat}/${props.match.params.cat}/${item.name.en.toLowerCase()}`}>
								{
									item.options.images && (
										<img alt={item.name.en} className="one" src={item.options.images[0].url} />
									)
								}
								
								{/* 
								<img alt={item.name.en} className="two" src={item.groups[0].imagesUrls[0]} /> */}
							</Link>
						</div>
						<div className="caption">
							<h4>
								<a >{item.name.en}</a>
							</h4>
							<p className="price">
								<span className="price-old">7 800,00 руб.</span>
								{
									item.options.price && (
										<span className="price-new">{item.options.price}</span>
									)
								}
								
							</p>
						</div>
					</div>
				</div>
			))
		}
	}
	
	return (
		<div className="container-fluid catalog">
			{console.log(props.match.params.cat)}
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-3 filter">
						{/* <Filter
							colors={this.state.colors}
							brands={this.state.brands}
							sizes={this.state.sizes}
							price={this.state.priceValue}
							priceRange={this.state.priceRange}
							updateDataFilter={this.updateDataFilter}
						/> */}
					</div>
					<div className="col-lg-9 col-md-9 col-sm-6 col-12">
						<div class="page_title_filter">
							<h1>Page title</h1>
							<div className="filter_navigation">
								<button class="left">
									<span class="lnr lnr-chevron-left" />
								</button>
								<ul>
									<li>
										<a >Clothing</a>
										<span class="lnr lnr-cross-circle" />
									</li>
									<li>
										<a >Clothing</a>
										<span class="lnr lnr-cross-circle" />
									</li>
									<li>
										<a >Clothing</a>
										<span class="lnr lnr-cross-circle" />
									</li>
									<li>
										<a >Clothing</a>
										<span class="lnr lnr-cross-circle" />
									</li>
									<li>
										<a >Clothing</a>
										<span class="lnr lnr-cross-circle" />
									</li>
								</ul>
								<button class="right">
									<span class="lnr lnr-chevron-right" />
								</button>
							</div>
						</div>
						<div className="catalog_products">{renderProducts()}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
