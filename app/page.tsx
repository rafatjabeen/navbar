import Image from "next/image";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home"

}

export default function Home() {
  return(
    <div>
      
      

      <h1 className= "text-3xl mt-4">
        
        
        Welcome to Next.js Website
      </h1>
      <br />
      

      <img
       src= "pic01.jpeg" 
       alt= "pic"
       
       />

      <header className="mb-80"></header>
<main className="mb-80"></main>
<footer className="mt-80"></footer>

      
    </div>
  )
}
  
    