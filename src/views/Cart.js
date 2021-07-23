import React from 'react'

export const Cart = () =>
{
    return (
        <div>
            <h3>Cart</h3>
            <hr />

            <div class="card shopping-cart">
                <div class="card-header bg-dark text-light">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shopping Cart
                    <a href="" class="btn btn-outline-info btn-sm pull-right">Continue Shopping</a>
                    <div class="clearfix"></div>
                </div>
                <div class="card-body">
                    {/* <!-- PRODUCT --> */}
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-2 text-center">
                            <img class="img-responsive" src="" alt="prewiew" width="120" height="80" />
                        </div>
                        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                            <h4 class="product-name"><strong></strong></h4>
                            <h4>
                                <small></small>
                            </h4>
                        </div>
                        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                                <h6><strong>$ <span class="text-muted">x</span></strong></h6>
                            </div>
                            <div class="col-4 col-sm-4 col-md-4">
                                <div class="quantity">
                                    <input type="number" step="1" max="99" min="1" value="" title="Qty" class="qty" size="4" />
                                </div>
                            </div>
                            <div class="col-2 col-sm-2 col-md-2 text-right">
                                <button type="button" class="btn btn-outline-danger btn-xs">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* <!-- END PRODUCT --> */}
                    <div class="pull-right">
                        <a href="" class="btn btn-outline-secondary pull-right">
                            Update Shopping Cart
                        </a>
                    </div>
                </div>
                <div class="card-footer">
                    {/* <!-- <div class="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="text" class="form-control" placeholder="cupone code">
                    </div>
                                                <div class="col-6">
                                                    <input type="submit" class="btn btn-default" value="Use cupone">
                    </div>
                                                </div>
                                            </div> --> */}
                    <div class="text-right">
                        <div class="cart-totals">
                            Subtotal: <b>$0.00</b>
                        </div>
                        <div class="cart-totals">
                            Tax: <b>$0.00</b>
                        </div>
                        <div class="cart-totals">
                            Grand total: <b>$0.00</b>
                        </div>
                    </div>
                    <div class="pull-right" style="margin: 10px">
                        <form id="checkout-form" action="" method="POST">
                            <input type="submit" class="btn btn-success pull-right" value="Checkout" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
