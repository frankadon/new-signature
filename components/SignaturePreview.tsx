import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Logo from "@/public/AdonGroup.png";
import Globe from "@/public/globe.svg";
import Phone from "@/public/phone-call.svg";
import AOW from "@/public/AOW.png";
import Image from "next/image";
import { Button } from "./ui/button";

interface SignaturePreviewProps {
  name: string;
  position: string;
}

const SignaturePreview = ({ name, position }: SignaturePreviewProps) => {
  // Create a ref to the signature container
  const signatureRef = useRef<HTMLDivElement | null>(null);

  // Handler to copy the signature's HTML content
  const handleCopy = () => {
    if (signatureRef.current) {
      navigator.clipboard
        .writeText(signatureRef.current.outerHTML)
        .then(() => console.log("Copied successfully"))
        .catch((error) => console.error(error));
    } else {
      console.error("Signature element not found.");
    }
  };

  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        <CardTitle>Signature preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="bg-slate-950 w-[700px] h-[200px] rounded-lg"
          id="signature"
          ref={signatureRef} // Attach the ref here
        >
          <div className="flex flex-col items-start gap-3 py-2">
            <div className="flex gap-3 items-center">
              <Image src={Logo} alt="Logo" className="w-[200px] ml-3" />
              <div className="flex flex-col gap-5">
                <div>
                  <b className="text-white text-lg">{name.toUpperCase()}</b>
                  <p className="text-white">{position}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:0401736730"
                    className="text-white flex items-center gap-2 text-xs"
                  >
                    <Image
                      src={Phone}
                      alt="Phone icon"
                      className="text-white w-4"
                    />
                    0401 736 730
                  </a>
                  <a
                    href="https://www.adongroup.com.au"
                    className="text-white flex items-center gap-2 text-xs"
                  >
                    <Image
                      src={Globe}
                      alt="Globe icon"
                      className="text-white w-4"
                    />
                    www.adongroup.com.au
                  </a>
                  <a
                    href="https://www.adonworkforce.com.au"
                    className="text-white flex items-center gap-2 text-xs"
                  >
                    <Image
                      src={Globe}
                      alt="Globe icon"
                      className="text-white w-4"
                    />
                    www.adonworkforce.com.au
                  </a>
                </div>
              </div>
              <div className="ml-auto">
                <Image src={AOW} alt="AOW logo" className="w-[200px] ml-auto" />
              </div>
            </div>
            <p className="text-white text-[9px] px-4">
              This email, its contents and any attachments are strictly
              confidential. They must not be used, distributed, copied or read
              by any person other than the addressee. Unauthorised use,
              disclosure, copying or reliance on the contents of and attachments
              to this email by anyone other than the addressee may be unlawful.
              If you have received this email and attachments in error please
              contact us at Ad on Group immediately to facilitate its return.
            </p>
          </div>
        </div>
        <Button
          variant={"outline"}
          className="mt-4"
          onClick={handleCopy} // Use the ref-based handler
        >
          Copy signature
        </Button>
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
