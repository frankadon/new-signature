"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import SignaturePreview from "./SignaturePreview";

const SignaturePage = () => {
  const [signatureName, setSignatureName] = useState("Your name");
  const [signaturePosition, setSignaturePosition] = useState("Your position");
  return (
    <>
      <div className="flex flex-col items-start gap-3 px-28 py-12">
        <div>
          <strong className="text-2xl">AOG Signature Generator</strong>
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-1/4">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Signature informations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div>
                    <label htmlFor="name">Name</label>
                    <Input
                      name="name"
                      placeholder="Name"
                      onChange={(e) => setSignatureName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="position">Position</label>
                    <Input
                      name="position"
                      placeholder="Position"
                      onChange={(e) => setSignaturePosition(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-3/4">
            <SignaturePreview
              name={signatureName}
              position={signaturePosition}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignaturePage;
