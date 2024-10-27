

import React from "react";
import Link from "next/link"


const Footer=() => {
    return(<div>

        <ul className=" bg-lime-400 h-12 py-2 px-4 flex justify-center space-x-5">

    <li><Link href= "/feedback"> Feedback</Link>

      </li>

    <li><Link href="/privacy"> Privacy</Link>
     
     </li>

   <li><Link href="/terms & conditions"> Terms &  Conditions</Link>
   

   </li>
   
    <li><Link href="/social media"> Social Media</Link>
      </li>

    </ul>
    </div>
    )
}

export default Footer;