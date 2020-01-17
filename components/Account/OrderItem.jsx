import {  Label, List, Image } from 'semantic-ui-react'

const OrderItem = ({ orderProduct }) => (
    <>
    <Image avatar src={orderProduct.product.mediaUrl} />
    <List.Content>
    <List.Header>{orderProduct.product.name}</List.Header>
    <List.Description>
        {orderProduct.quantity} · ${orderProduct.product.price}
    </List.Description>
    </List.Content>
    <List.Content floated="right">
    <Label tag color="red" size="tiny">
        {orderProduct.product.sku}
    </Label>
    </List.Content>
    </>
)

export default OrderItem;
