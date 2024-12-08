"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Globe from "@/public/globe.svg";
import AOG from "@/public/AOG-logo.svg";
import AOW from "@/public/AOW-logo.svg";
import AOH from "@/public/AOH-logo.svg";
import Phone from "@/public/phone-call.svg";
import Mobile from "@/public/smartphone.svg";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SignatureDialogProps {
  name: string;
  position: string;
  contact: string;
  mobile?: string;
  isWorkforce?: boolean;
}

const SignatureDialog = ({
  name,
  position,
  contact,
  mobile,
  isWorkforce,
}: SignatureDialogProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [showHTML, setShowHTML] = useState(false); // State to toggle HTML display
  const signatureRef = useRef<HTMLDivElement | null>(null);
  const [origin, setOrigin] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const handleCopyHTML = () => {
    if (signatureRef.current) {
      const clonedNode = signatureRef.current.cloneNode(true) as HTMLElement;

      const images = clonedNode.querySelectorAll("img");
      images.forEach((img) => {
        const originalSrc = img.getAttribute("data-src");
        if (originalSrc) {
          img.setAttribute("src", originalSrc);
        }
      });

      navigator.clipboard
        .writeText(clonedNode.outerHTML)
        .then(() => {
          toast({
            title: "Copied sucessfully!",
          });
        })
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
        For Monday.com
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
            <DialogTitle>Signature Details</DialogTitle>
            <DialogDescription>
              Please copy the signature below for gmail
            </DialogDescription>
          </DialogHeader>
          <div
            style={{
              backgroundColor: "#000",
              maxWidth: "700px",
              maxHeight: "280px",
              borderRadius: "12px",
            }}
            ref={signatureRef}
            id="signature"
            // hidden={isHidden}
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={isWorkforce ? AOW : AOG}
                    alt="Logo"
                    width={isWorkforce ? 220 : 190}
                    height={isWorkforce ? 130 : 120}
                    priority
                    style={{ height: "auto", marginLeft: "12px" }}
                    data-src={
                      isWorkforce
                        ? `${origin}/AOW-logo.svg`
                        : `${origin}/AOG-logo.svg`
                    }
                  />
                  {isWorkforce ? (
                    <strong style={{ color: "white", marginLeft: "12px" }}>
                      A division of{" "}
                      <b style={{ color: "#2BA8E0" }}>AdOn Group</b>
                    </strong>
                  ) : (
                    false
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div>
                    <b style={{ color: "white", fontSize: "18px" }}>{name}</b>
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
                        data-src={`${origin}/phone-call.svg`}
                      />
                      {contact}
                    </a>
                    {mobile ? (
                      <a
                        href={`tel:` + `${mobile}`}
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12px",
                        }}
                      >
                        <Image
                          src={Mobile}
                          alt="Phone icon"
                          style={{ color: "white", width: "16px" }}
                          data-src={`${origin}/smartphone.svg`}
                        />
                        {mobile}
                      </a>
                    ) : (
                      ""
                    )}
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
                        data-src={`${origin}/globe.svg`}
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
                        data-src={`${origin}/globe.svg`}
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
                    src={isWorkforce ? AOG : AOW}
                    alt="AOW logo"
                    width={200}
                    height={80}
                    style={{ height: "auto" }}
                    priority
                    data-src={
                      isWorkforce
                        ? `${origin}/AOG-logo.svg`
                        : `${origin}/AOW-logo.svg`
                    }
                  />
                  {isWorkforce ? (
                    false
                  ) : (
                    <Image
                      src={AOH}
                      alt="AOH logo"
                      width={120}
                      height={80}
                      style={{ height: "auto" }}
                      priority
                      data-src={`${origin}/AOH-logo.svg`}
                    />
                  )}
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
              {showHTML ? "Hide HTML Code" : "Show HTML Code for Monday.com"}
            </Button>
            {showHTML ? (
              <Button
                variant={"default"}
                size={"sm"}
                onClick={handleCopyHTML}
                className="ml-auto"
              >
                <Copy /> Copy Signature HTML for Monday.com
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
