"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import Globe from "@/public/globe.svg";
import AOG from "@/public/AOG-logo.svg";
import AOW from "@/public/AOW-logo.svg";
import AOH from "@/public/AOH-logo.svg";
import Phone from "@/public/phone-call.svg";
import { Copy } from "lucide-react";

interface SignatureDialogProps {
  name: string;
  position: string;
  contact: string;
}

const SignatureDialog = ({ name, position, contact }: SignatureDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [showHTML, setShowHTML] = useState(false); // State to toggle HTML display
  const signatureRef = useRef<HTMLDivElement | null>(null);

  const handleCopyHTML = () => {
    if (signatureRef.current) {
      const clonedNode = signatureRef.current.cloneNode(true) as HTMLElement;
      const images = clonedNode.querySelectorAll("img");
      images.forEach((img) => {
        if (img.src.startsWith("/")) {
          img.src = `${window.location.origin}${img.src}`;
        }
      });
      navigator.clipboard
        .writeText(clonedNode.outerHTML)
        .then(() => console.log("HTML code copied successfully!"))
        .catch((error) => console.error(error));
    } else {
      console.error("Signature element not found.");
    }
  };

  return (
    <>
      <Button
        variant={"default"}
        className="mt-4"
        onClick={() => setOpenDialog(true)}
      >
        Show signature
      </Button>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className="w-full"
          style={{
            maxWidth: "750px", // Set the dialog's width to 800px
            width: "100%", // Ensure it is responsive
          }}
        >
          <DialogHeader>
            <DialogTitle>Copy your signature based on usage.</DialogTitle>
            <DialogDescription>Signature details</DialogDescription>
          </DialogHeader>
          <div
            style={{
              backgroundColor: "#000",
              width: "700px",
              borderRadius: "12px",
            }}
            ref={signatureRef}
            id="signature"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                padding: "8px 0",
              }}
            >
              <div
                style={{ display: "flex", gap: "12px", alignItems: "center" }}
              >
                <Image
                  src={AOG}
                  alt="Logo"
                  width={190}
                  height={120}
                  priority
                  style={{ height: "auto", marginLeft: "12px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div>
                    <b style={{ color: "white", fontSize: "18px" }}>
                      {name.toUpperCase()}
                    </b>
                    <p style={{ color: "white" }}>{position}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <a
                      href={`tel:` + `${contact}`}
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                      }}
                    >
                      <Image
                        src={Phone}
                        alt="Phone icon"
                        style={{ color: "white", width: "16px" }}
                      />
                      {contact}
                    </a>
                    <a
                      href="https://www.adongroup.com.au"
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                      }}
                    >
                      <Image
                        src={Globe}
                        alt="Globe icon"
                        style={{ color: "white", width: "16px" }}
                      />
                      www.adongroup.com.au
                    </a>
                    <a
                      href="https://www.adonworkforce.com.au"
                      style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "12px",
                      }}
                    >
                      <Image
                        src={Globe}
                        alt="Globe icon"
                        style={{ color: "white", width: "16px" }}
                      />
                      www.adonworkforce.com.au
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    marginLeft: "32px",
                  }}
                >
                  <Image
                    src={AOW}
                    alt="AOW logo"
                    width={200}
                    height={80}
                    style={{ height: "auto" }}
                    priority
                  />
                  <Image
                    src={AOH}
                    alt="AOH logo"
                    width={120}
                    height={80}
                    style={{ height: "auto" }}
                    priority
                  />
                </div>
              </div>
              <span
                style={{ color: "white", fontSize: "9px", padding: "0 16px" }}
              >
                This email, its contents and any attachments are strictly
                confidential. They must not be used, distributed, copied or read
                by any person other than the addressee. Unauthorised use,
                disclosure, copying or reliance on the contents of and
                attachments to this email by anyone other than the addressee may
                be unlawful. If you have received this email and attachments in
                error please contact us at Ad on Group immediately to facilitate
                its return.
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 mt-4">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => setShowHTML(!showHTML)}
            >
              {showHTML ? "Hide HTML Code" : "Show HTML Code"}
            </Button>
            {showHTML ? (
              <Button
                variant={"default"}
                size={"sm"}
                onClick={handleCopyHTML}
                className="ml-auto"
              >
                <Copy /> Copy Signature HTML
              </Button>
            ) : (
              ""
            )}
          </div>
          {showHTML && signatureRef.current && (
            <pre
              className="mt-4 p-2 bg-gray-800 text-white rounded-md overflow-auto"
              style={{ maxHeight: "300px", whiteSpace: "pre-wrap" }}
            >
              {signatureRef.current.outerHTML}
            </pre>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SignatureDialog;
