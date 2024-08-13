import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/header";
import WhyChooseUs from "./components/whyChooseUs/whyChooseUs";
import Products from "./components/products/products";
import Feedback from "./components/feedback/feedback";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Header/>
      <Products/>
      <WhyChooseUs/>
      <Feedback/>
    </main>
  );
}
