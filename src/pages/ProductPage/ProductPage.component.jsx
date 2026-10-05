import ProductList from "../../components/ProductList/ProductList.component";
import Styles from "./ProductPage.module.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router";

const ProductPage = () => {
    
    const navigate = useNavigate()

    

    const handleCartClicked = () => {
        navigate("/cart")
    }
    
    return (
        <div className={Styles.productPageContainer}>
            <div className={Styles.titleContainer}>
                <h1 className={Styles.pageTitle}>Electro Deals</h1>
                <div onClick={handleCartClicked} className={Styles.cartContainer}>
                    <PiShoppingCartFill size={30} />
                    <p> Items</p>
                </div>
            </div>
            <ProductList />
        </div>
    )
}

export default ProductPage;