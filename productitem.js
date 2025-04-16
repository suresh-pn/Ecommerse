import React from 'react';


let productItem = ({product}) => {
    return(
        <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
        <div className="product"> 
            <img src={product.image} alt={product.title} />
            <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                <li className="icon"><span className="fas fa-expand-arrows-alt"></span></li>
                <li className="icon mx-3"><span className="far fa-heart"></span></li>
                <li className="icon"><span className="fas fa-shopping-bag"></span></li>
            </ul>
        </div>
        <div className="tag bg-red">sale</div>
        <div className="title pt-4 pb-1">{product.title}</div>
        <div className="d-flex align-content-center justify-content-center"> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> </div>
        <div className="price">RS.{product.price}</div>
        </div>
    )
    
}



export default productItem;