// import { useState } from "react";

// export default function FAQs() {
//   const [questions, setQuestions] = useState(1);
//   return (
//     <div>
//       <h1 id="faq" className="text-3xl font-bold italic pl-3 underline  ">
//         Frequently Asked Questions
//       </h1>
//       <h3>Is it user friendly?</h3>
//       <p className={questions===1?"block":"hidden"}>answer</p>
//     </div>
//   );
// }
import { useState } from "react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div>
        <h1 id="faq" className="text-3xl font-bold italic pl-3 underline py-12 ">
        Frequently Asked Questions
      </h1>
      <div className="text-2xl font-normal pointer-events-auto pb-6 pl-2">      
        <h3 onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)} >
        is it beginner friendly?
      </h3>
      <p className= {activeFaq === 1 ? "block" : "hidden"} >
        yes! clarify provide beginner friendly interface to user .It summerise content and provide brief info to user. 
      </p>
      </div>

    </div>
  );
}
