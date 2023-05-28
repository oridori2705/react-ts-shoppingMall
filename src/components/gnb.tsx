import { Link } from "react-router-dom"

export const Gnb = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/products">상품목록</Link></li>
            <li><Link to="/cart">장바구니</Link></li>
        </ul>
    </nav>
  )
}
