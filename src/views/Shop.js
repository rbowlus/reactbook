import React from 'react'

export const Shop = () => {
    return (
        <React.Fragment>
            <h3>Shop</h3>
            <hr />

            <div class="card-deck">
                <div class="col-4">
                    <div class="card">
                        <div class="card-header">
                            <h6>
                                Product Name
                                <span class="float-right">$0.00</span>
                            </h6>
                        </div>
                        <div class="card-body">
                            <img class="card-img-top" src="" alt="Product Name" />
                            <a class="btn btn-success btn-block" style="margin-top: 10px;" href="">Add to cart</a>
                            <p class="card-text" style="margin-top: 10px;">Product Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}