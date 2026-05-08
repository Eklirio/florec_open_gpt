import React from "react";
import Mail from "./mail";

type Product = {
  id: string;
  name: string;
  price: number;
  category: "romantico" | "cumpleanos" | "corporativo" | "nacimiento";
};

const products: Product[] = [
  { id: "bx-rose", name: "Box Rosas Premium", price: 159, category: "romantico" },
  { id: "ramo-encanto", name: "Ramo Encanto", price: 119, category: "cumpleanos" }
];

export default function App() {
  return (
    <main>
      <section>
        <h1>Detalles Flore C</h1>
        <p>Experiencia premium para compra de detalles de regalo.</p>
      </section>

      <section>
        <h2>Arquitectura UI robusta</h2>
        <ul>
          <li>Diseño por componentes reutilizables.</li>
          <li>Modelo tipado para catálogo y pedidos.</li>
          <li>Integración omnicanal: WhatsApp + correo.</li>
        </ul>
      </section>

      <section>
        <h2>Productos</h2>
        {products.map((product) => (
          <article key={product.id}>
            <h3>{product.name}</h3>
            <p>S/ {product.price}</p>
          </article>
        ))}
      </section>

      <Mail
        to="ventas@detallesflorec.com"
        subject="Nuevo pedido web"
        template="Gracias por tu compra en Detalles Flore C"
      />
    </main>
  );
}
