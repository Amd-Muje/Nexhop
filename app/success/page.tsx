"use client"

import { useCartStore } from "@/store/cart-store";
import Link from "next/link";
import { useEffect } from "react";

export default function SuccessPage() {
    const { clearCart } = useCartStore();
    useEffect (() => {
        clearCart();
    }, [clearCart]);

    return (
        <div>
            <h1>Payment Succesfull!</h1>
            <p>Thank You for your purchase, your order is being processed</p>
        <Link href={'/products'}>
            continue shopping
        </Link>
        </div>
    );
}