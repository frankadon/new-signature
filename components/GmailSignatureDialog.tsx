/* eslint-disable @next/next/no-img-element */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

interface GmailSignatureViewProps {
  name: string;
  position: string;
  contact: string;
  mobile?: string;
  isWorkforce?: boolean;
}

const GmailSignatureDialog = ({
  name,
  position,
  contact,
  mobile,
  isWorkforce,
}: GmailSignatureViewProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const nbsp = "\u00A0";

  return (
    <>
      <Button
        variant={"default"}
        className="mt-4"
        onClick={() => setOpenDialog(true)}
      >
        For Gmail
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
          <table
            style={{
              backgroundColor: "#000",
              maxWidth: "700px",
              maxHeight: "280px",
              borderRadius: "12px",
              color: "white",
              width: "700px",
              height: "200px",
              borderCollapse: "collapse",
            }}
            id="signature"
          >
            <tbody>
              <tr>
                {/* Logo and Division Information */}
                <td
                  style={{
                    width: isWorkforce ? "600px" : "180px",
                    textAlign: "center",
                    padding: "12px",
                  }}
                >
                  <img
                    src={
                      isWorkforce
                        ? `https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png`
                        : `https://adongroup.com.au/wp-content/uploads/2024/12/AdonGroup.png`
                    }
                    alt="Logo"
                    width={isWorkforce ? 380 : 190}
                    height={isWorkforce ? 130 : 120}
                    style={{ height: "auto" }}
                  />
                  {isWorkforce && (
                    <div style={{ marginTop: "8px" }}>
                      <strong>
                        A division of <b>AdOn Group</b>
                      </strong>
                    </div>
                  )}
                </td>

                {/* Name, Position, and Contact Information */}
                <td style={{ width: "200px", padding: "12px" }}>
                  <div style={{ marginBottom: "10px" }}>
                    <strong style={{ fontSize: "18px" }}>{name}</strong>
                    <p style={{ margin: "4px 0" }}>{position}</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <p>
                      <a
                        href={`tel:${contact}`}
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12px",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src="https://adongroup.com.au/wp-content/uploads/2024/12/phone-call.png"
                          alt="Phone icon"
                          width={16}
                          height={16}
                        />
                        {nbsp}
                        {contact}
                      </a>
                      {mobile && (
                        <a
                          href={`tel:${mobile}`}
                          style={{
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "12px",
                            textDecoration: "none",
                          }}
                        >
                          <img
                            src="https://adongroup.com.au/wp-content/uploads/2024/12/smartphone.png"
                            alt="Mobile icon"
                            width={16}
                            height={16}
                          />
                          {nbsp}
                          {mobile}
                        </a>
                      )}
                      <a
                        href="https://www.adongroup.com.au"
                        style={{
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12px",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        {nbsp}
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
                          textDecoration: "none",
                        }}
                      >
                        <img
                          src="https://adongroup.com.au/wp-content/uploads/2024/12/globe.png"
                          alt="Globe icon"
                          width={16}
                          height={16}
                        />
                        {nbsp}
                        www.adonworkforce.com.au
                      </a>
                    </p>
                  </div>
                </td>

                {/* Additional Logos */}
                <td
                  style={{
                    width: "210px",
                    textAlign: "center",
                    padding: "12px",
                  }}
                >
                  {!isWorkforce && (
                    <div style={{ marginTop: "8px", textAlign: "center" }}>
                      <img
                        src="https://adonworkforce.com.au/wp-content/uploads/2023/03/Ad-on-Workforce-logo.png"
                        alt="AOW logo"
                        style={{
                          width: "210px",
                          height: "auto",
                          margin: "auto",
                        }}
                      />
                    </div>
                  )}
                  {!isWorkforce && (
                    <div style={{ marginTop: "8px", textAlign: "center" }}>
                      <img
                        src="https://adongroup.com.au/wp-content/uploads/2024/12/AOD-logo.png"
                        alt="AOD logo"
                        style={{
                          width: "150px",
                          height: "auto",
                          margin: "auto",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                  )}

                  {!isWorkforce && (
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="https://adongroup.com.au/wp-content/uploads/2024/12/AOH-logo-1.png"
                        alt="AOH logo"
                        width={120}
                        height={80}
                        style={{ height: "auto", margin: "auto" }}
                      />
                    </div>
                  )}
                </td>
              </tr>

              {/* Disclaimer */}
              <tr>
                <td colSpan={3} style={{ padding: "16px", fontSize: "9px" }}>
                  This email, its contents and any attachments are strictly
                  confidential. They must not be used, distributed, copied or
                  read by any person other than the addressee. Unauthorized use,
                  disclosure, copying or reliance on the contents of and
                  attachments to this email by anyone other than the addressee
                  may be unlawful. If you have received this email and
                  attachments in error, please contact us at AdOn Group
                  immediately to facilitate its return.
                </td>
              </tr>
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GmailSignatureDialog;
