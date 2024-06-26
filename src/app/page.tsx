"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import axios from "axios";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const buyProduct1 = async () => {
    try {
      const response = await axios.post("/api/purchaseProduct", {
        productId: "430198",
      });
      console.log(response.data);
      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert("An error occured");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}</div>
      <div>
        <button onClick={buyProduct1}>Buy Product 1</button>
      </div>
    </main>
  );
}
