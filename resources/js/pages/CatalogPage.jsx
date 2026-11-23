import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CatalogPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(res => setProducts(res.data));
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Каталог</h1>
            {products.map(p => (
                <div key={p.id}>{p.brand} — {p.name} — {p.price} ₽</div>
            ))}
        </div>
    );
}