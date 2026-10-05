import Styles from "./ProductList.module.css";
import Products from "../../assets/products.json";
import { TbShoppingCartPlus } from "react-icons/tb";

const ProductList = () => {


    const handleItemClicked = (item) => {
     
    }

    return (
        <div className={Styles.productListContainer}>
            <div className={Styles.productGrid}>
                {
                    Products.map((item, index) => {
                        return (
                            <div className={Styles.productItem} key={item.id}>
                                <img className={Styles.productImage} src={`https://picsum.photos/20${index}`} />
                                <div className={Styles.productDetailsContainer}>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>₹ {item.price}</p>
                                    </div>
                                    <TbShoppingCartPlus size={24} onClick={() => handleItemClicked(item)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList