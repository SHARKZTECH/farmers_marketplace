import { router } from "@inertiajs/react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This value is from the props in the UI
const style = {"layout":"vertical"};

const ButtonWrapper = ({ id,showSpinner,amount }) => {
    const [{ isPending }] = usePayPalScriptReducer();

    const onCreateOrder = (data,actions) => {
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                    },
                },
            ],
        });
    }
    
    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
            router.put(`/orders/${id}`)
        });
    }

    return (
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[style]}
                fundingSource={undefined}
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
        </>
    );
}

const PayPalBtn = ({amount,id}) => {
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider options={{ clientId: "AbZDN6soec8-E-qH0B7bt4SaX6L7K_TIUJrxC7nRj6nXW05l4kJE6fLIQAV_50yShhxOom6g6Tx_dgLd", components: "buttons", currency: "USD" }}>
                <ButtonWrapper id={id} showSpinner={false} amount={(Number(amount) / 140).toFixed(2)}/>
            </PayPalScriptProvider>
        </div>
    );
}

export default PayPalBtn