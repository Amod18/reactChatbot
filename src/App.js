import { inject } from "@vercel/analytics/*";
import Temp from "./temp";
export default function App() {
  return (
    <section>
      <inject/>
      <Temp />
    </section>
  );
}