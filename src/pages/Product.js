import React, { Component } from 'react'
import { Container, Row, Col, Button, Media, BImg, Modal } from 'bootstrap-4-react'
import product from '../assets/img/product_img.png'
import size_men from '../assets/img/size_men.png'
import size_women from '../assets/img/size_women.png'

class Product extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row className="no-gutter">
						<Col className="pl-0 pr-1" col="lg-6">
							<div id="carousel-custom" class="carousel slide" data-ride="carousel">
								{/* Wrapper for slides */}
								<div class="carousel-inner">
									<div class="carousel-item active">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</div>
									<div class="carousel-item">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</div>
									<div class="carousel-item">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</div>

									{/* Controls */}
									<a class="left carousel-control" href="#carousel-custom" data-slide="prev">
										<i class="fas fa-angle-left" />
									</a>
									<a class="right carousel-control" href="#carousel-custom" data-slide="next">
										<span class="glyphicon glyphicon-chevron-right" />
									</a>
								</div>

								{/* Indicators */}
								<ol class="carousel-indicators">
									<li data-target="#carousel-custom" data-slide-to="0" class="active">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</li>
									<li data-target="#carousel-custom" data-slide-to="1">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</li>
									<li data-target="#carousel-custom" data-slide-to="2">
										<Media>
											<BImg className="img-fluid" src={product} />
										</Media>
									</li>
								</ol>
							</div>
						</Col>

						<Col className="pr-0 pl-1" col="lg-6">
							<div className="product_title">title</div>
							<div className="price">price</div>
							<div className="product_size">
								<span>Choose your size</span>
								<Button primary>S</Button>
								<Button primary>M</Button>
								<Button primary>L</Button>
								<Button primary>XL</Button>
							</div>
							<div className="product_color">
								<span>Choose color</span>
								<Button primary>S</Button>
								<Button primary>M</Button>
								<Button primary>L</Button>
								<Button primary>XL</Button>
							</div>
							<div className="add_cart">
								<Button primary>ADD TO CART</Button>
							</div>
							<div className="product_description">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
											DETAILS
										</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
											CARE
										</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
											RETURN
										</span>
									</li>
									<li className="nav-item">
										{/* Button trigger Modal */}
										<span className="nav-link" data-toggle="modal" data-target="#exampleModal">
											SIZE GUIDE
										</span>
									</li>
								</ul>

								<div className="tab-content">
									<div className="tab-pane active" id="home" role="tabpanel">
										Red t-shirt in sports casual style
									</div>
									<div className="tab-pane" id="profile" role="tabpanel">
										Care
									</div>
									<div className="tab-pane" id="messages" role="tabpanel">
										Retutn
									</div>
								</div>

								{/* Modal */}
								<Modal id="exampleModal" fade>
									<Modal.Dialog>
										<Modal.Content>
											<Modal.Header>
												<Modal.Title>SIZE GUIDE</Modal.Title>
												<Modal.Close>
													<span aria-hidden="true">&times;</span>
												</Modal.Close>
											</Modal.Header>
											<Modal.Body>
												Use the chart below to determine your size. If you’re on the borderline between two sizes, order the smaller size for a tighter fit or the larger size
												for a looser fit. If your measurements for chest and waist correspond to two different suggested sizes, order the size indicated by your chest
												measurement.
												<Col col="lg-6">
													MALE
													<Media>
														<BImg className="img-fluid" src={size_men} />
													</Media>
												</Col>
												<Col col="lg-6">
													FEMALE
													<Media>
														<BImg className="img-fluid" src={size_women} />
													</Media>
												</Col>
											</Modal.Body>
										</Modal.Content>
									</Modal.Dialog>
								</Modal>
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Product
