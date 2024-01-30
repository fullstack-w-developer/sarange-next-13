import ContactUs from "@/components/landing/ContactUs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Introduction from "@/components/landing/Introduction";
import OurServices from "@/components/landing/OurServices";

export default function Home() {
  return (
    <div>
      <Introduction />
       <OurServices />
      <ContactUs/>
    </div>
  )
}
