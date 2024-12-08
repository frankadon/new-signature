import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Globe from "@/public/globe.svg";
import Phone from "@/public/phone-call.svg";
import Mobile from "@/public/smartphone.svg";
import Image from "next/image";

interface SignaturePreviewProps {
  name: string;
  position: string;
  contact: string;
  mobile?: string;
  isWorkforce?: boolean;
}

const SignaturePreview = ({
  name,
  position,
  contact,
  mobile,
  isWorkforce,
}: SignaturePreviewProps) => {
  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        <CardTitle>Signature preview</CardTitle>
        <CardDescription>Please do not copy this signature.</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="bg-slate-950 w-[700px] h-auto rounded-lg"
          id="signature"
        >
          <div className="flex flex-col items-start gap-3 py-2">
            <div className="flex gap-3 items-center">
              {isWorkforce ? (
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png"
                    alt="AOW logo"
                    width={220}
                    height={100}
                    className="h-auto ml-3"
                    priority
                  />
                  <strong className="text-white">
                    A division of AdOn Group
                  </strong>
                </div>
              ) : (
                <Image
                  src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
                  alt="Logo"
                  width={190}
                  height={120}
                  priority
                  className="h-auto ml-3"
                />
              )}
              <div className="flex flex-col gap-5">
                <div>
                  <b className="text-white text-lg">{name}</b>
                  <p className="text-white">{position}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:` + `${contact}`}
                    className="text-white flex items-center gap-2 text-xs"
                  >
                    <Image
                      src={Phone}
                      alt="Phone icon"
                      className="text-white w-4"
                    />
                    {contact}
                  </a>
                  {mobile ? (
                    <a
                      href={`tel:` + `${mobile}`}
                      className="text-white flex items-center gap-2 text-xs"
                    >
                      <Image
                        src={Mobile}
                        alt="Mobile icon"
                        className="text-white w-4"
                      />
                      {mobile}
                    </a>
                  ) : (
                    ""
                  )}
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
              <div className="flex flex-col items-center gap-4 ml-8">
                {isWorkforce ? (
                  <Image
                    src="https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png"
                    alt="Logo"
                    width={190}
                    height={120}
                    priority
                    className="h-auto ml-3"
                  />
                ) : (
                  <Image
                    src="https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png"
                    alt="AOW logo"
                    width={200}
                    height={80}
                    className="h-auto"
                    priority
                  />
                )}
                {isWorkforce ? (
                  false
                ) : (
                  <Image
                    src="https://adongroup.com.au/wp-content/uploads/2024/12/AOH-logo.png"
                    alt="AOH logo"
                    width={120}
                    height={80}
                    className="h-auto"
                    priority
                  />
                )}
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
      </CardContent>
    </Card>
  );
};

export default SignaturePreview;
