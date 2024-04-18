
import { useAuth } from '../lib/firebase/auth'
export default function Page() {

    const { user } = useAuth();
    console.log(user.uid);

    return (
        <>
            <div className="product">
                <div className="description">
                    <h3>kindling plan</h3>
                    <h5>$10.00 / month</h5>
                </div>
            </div>
            <form action={`/api/stripe/checkout?uid=${user.uid}`} method="POST" >
                {/* Add a hidden field with the lookup_key of your Price */}
                <input type="hidden" name="lookup_key" value="firesidebase" />
                <button id="checkout-and-portal-button" type="submit" >
                    Checkout
                </button>
            </form>
        </>
    )

}