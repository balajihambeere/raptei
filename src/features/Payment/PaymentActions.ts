import { PaymentDocument } from "./PaymentSchema";
import { PaymentType } from "./PaymentTypes";


export async function addPaymentMethodAction(address: PaymentType): Promise<PaymentType> {
    const newPayment: PaymentType = new PaymentDocument(address);
    const payment: PaymentType = await newPayment.save();
    return JSON.parse(JSON.stringify(payment));
}
