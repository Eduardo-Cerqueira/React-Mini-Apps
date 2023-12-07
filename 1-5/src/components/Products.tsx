import { useEffect, useState } from "react"
import ProductRow from "./ProductRow";

export default function Products() {
    const [products, setProducts] = useState<Product[]>();

    useEffect(() => {
        const products: Product[] = [
            {
                name: 'Baguette',
                picture: 'i-fluent-emoji:baguette-bread',
                description: 'Type de pain très apprécié en France',
                quantity: 1
            },
            {
                name: 'Balles',
                picture: 'i-fluent-emoji-basketball',
                description: 'Objet sphérique de petite taille utilisé comme le ballon ou la boule comme matériel de sport et loisir',
                quantity: 9
            },
            {
                name: 'Avocat',
                picture: 'i-fluent-emoji-avocado',
                description: "Fruit de l'avocatier",
                quantity: 5
            },
            {
                name: 'Brocoli',
                picture: 'i-fluent-emoji:broccoli',
                description: 'Le brocoli est une variété de chou originaire de Sicile',
                quantity: 3
            }
        ]

        setProducts(products)
    }, [products]);

    return (
        <>
            <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Your groceries list</h2>
            <hr/>
            {products && products.map((product: Product) => (
                <>
                    <ProductRow product={product}/>
                    <hr/>
                </>
            ))}
        </>
    )
}