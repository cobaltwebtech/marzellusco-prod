import React from "react";
import DynamicIcon from "@/helpers/DynamicIcon";

const PaymentTypes = () => {

  return (
    <ul className="flex items-center justify-center space-x-4">
      <li>
          <span className="sr-only">Visa</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaCcVisa"} 
          />
      </li>

      <li>
          <span className="sr-only">MasterCard</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaCcMastercard"} 
          />
      </li>

      <li>
          <span className="sr-only">American Express</span>
          <DynamicIcon
            className="inline-block w-8 h-auto" 
            icon={"FaCcAmex"} 
          />
      </li>
      <li>
          <span className="sr-only">Discover</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaCcDiscover"}
          />
      </li>

      <li>
          <span className="sr-only">Apple Pay</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaCcApplePay"} 
          />
      </li>

      <li>
          <span className="sr-only">Google Pay</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaGooglePay"} 
          />
      </li>
      <li>
          <span className="sr-only">Shop Pay</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"FaShopify"} 
          />
      </li>
      <li>
          <span className="sr-only">Shop Pay</span>
          <DynamicIcon 
            className="inline-block w-8 h-auto" 
            icon={"SiKlarna"} 
          />
      </li>
    </ul>
  );
};

export default PaymentTypes;
