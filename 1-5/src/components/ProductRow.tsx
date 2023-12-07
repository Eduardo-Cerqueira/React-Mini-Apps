export default function ProductRow({ product }: { product: Product}) {
    return (
        <li>
            <div className={product.picture} style={{ display: 'inline-block' }}/>
            <div style={{ display: 'inline-block', marginLeft: '10px', marginRight: '5px' }}>{product.quantity}</div>
            <div style={{ display: 'inline-block' }}>{product.name}</div>
            <div>{product.description}</div>
        </li>
    );
}