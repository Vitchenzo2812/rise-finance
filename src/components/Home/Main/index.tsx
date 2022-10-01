import Hero from "./Hero";
import ConsultingForStartups from './Consulting-for-startups';
import DeliveringValue from "./Delivering-value";
import CaseStudy from "./Case-study";
import CorumaFinance from "./Coruma-finance";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Main() {
  return(
    <>
      <Header />
      <Hero />
      <ConsultingForStartups />
      <DeliveringValue />
      <CaseStudy />
      <CorumaFinance />
      <Footer />
    </>
  );
}