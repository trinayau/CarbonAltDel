import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackButton } from "../../components";
import dayjs from "dayjs";

const SingleOrderPage = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState({});
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    let getOrder = async () => {
        let response = await fetch(
            `http://127.0.0.1:8000/api/orders/get_order/${orderId}`
        );
        let data = await response.json();
        if (response.status === 200) {
            setOrder(data);
            setOrderItems(data.items);
        }
        console.log(data)
        // setOrder(data);
        // setOrderItems(data.order_items);
    };

    return ( <div className="single-order" >
    <BackButton />
    <div className="single-order__container" style={{padding: '30px', textAlign: 'center'}}>
    <h1>Order #: {orderId}</h1>
    {order && <><h2>Order Date: { dayjs(order.date_ordered).format('DD/MM/YYYY') }</h2>
    <h2>Order Status: Success</h2></>}
    <h2>Ordered Items: {orderItems.length}</h2>
    <div className="single-order__container__items" >
    {orderItems.map((item) => ( <div className="single-order__container__items__item" >
    </div>
    ))}
    <h2>Order Total: £{order.total_price}</h2>
    <h2>Total Emissions Offset: {order.total_emissions}kg</h2>
    </div>
    </div>

    </div> );
}
 
export default SingleOrderPage;
