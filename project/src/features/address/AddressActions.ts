import { AddressDocument } from "./AddressSchema";
import { AddressType } from "./AddressTypes";

export async function addShippingAddressAction(address: AddressType): Promise<AddressType> {
    const newAddress: AddressType = new AddressDocument(address);
    const result: AddressType = await newAddress.save();
    return JSON.parse(JSON.stringify(result));
}
