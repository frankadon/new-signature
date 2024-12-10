"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import SignaturePreview from "./SignaturePreview";
import { Info } from "lucide-react";
import HoverInfo from "./HoverInfo";
import SignatureDialog from "./SignatureDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GmailSignatureDialog from "./GmailSignatureDialog";

const SignaturePage = () => {
  const [signatureName, setSignatureName] = useState("Your name");
  const [signaturePosition, setSignaturePosition] = useState("Your position");
  const [signatureContact, setSignatureContact] = useState("07 5586 1400");
  const [signatureMobile, setSignatureMobile] = useState("");
  const [isWorkforceUser, setIsWorkforceUser] = useState(false);
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
                <Tabs defaultValue="default">
                  <TabsList>
                    <TabsTrigger
                      value="default"
                      onClick={() => setIsWorkforceUser(false)}
                    >
                      Default
                    </TabsTrigger>
                    <TabsTrigger
                      value="sales"
                      onClick={() => setIsWorkforceUser(false)}
                    >
                      Phone and mobile
                    </TabsTrigger>
                    <TabsTrigger
                      value="aow"
                      onClick={() => setIsWorkforceUser(true)}
                    >
                      Workforce
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="default">
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
                      <div>
                        <label htmlFor="contact" className="flex gap-2">
                          {/* Contact <Info className="w-4 text-slate-400" /> */}
                          <HoverInfo
                            title="Contact"
                            icon={<Info className="w-4 text-slate-400" />}
                            description="Note for PH employee: Please do not edit this number."
                          />
                        </label>
                        <Input
                          name="contact"
                          placeholder={signatureContact}
                          onChange={(e) => setSignatureContact(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <SignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                        />
                        <GmailSignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="sales">
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
                      <div>
                        <label htmlFor="contact" className="flex gap-2">
                          {/* Contact <Info className="w-4 text-slate-400" /> */}
                          <HoverInfo
                            title="Phone"
                            icon={<Info className="w-4 text-slate-400" />}
                            description="Note for PH employee: Please do not edit this number."
                          />
                        </label>
                        <Input
                          name="contact"
                          placeholder={signatureContact}
                          onChange={(e) => setSignatureContact(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact" className="flex gap-2">
                          {/* Contact <Info className="w-4 text-slate-400" /> */}
                          <HoverInfo
                            title="Mobile"
                            icon={<Info className="w-4 text-slate-400" />}
                            description="Note for PH employee: Please do not edit this number."
                          />
                        </label>
                        <Input
                          name="mobile"
                          placeholder={signatureMobile}
                          onChange={(e) => setSignatureMobile(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <SignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                          mobile={signatureMobile}
                        />
                        <GmailSignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                          mobile={signatureMobile}
                        />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="aow">
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
                      <div>
                        <label htmlFor="contact" className="flex gap-2">
                          {/* Contact <Info className="w-4 text-slate-400" /> */}
                          <HoverInfo
                            title="Phone"
                            icon={<Info className="w-4 text-slate-400" />}
                            description="Note for PH employee: Please do not edit this number."
                          />
                        </label>
                        <Input
                          name="contact"
                          placeholder={signatureContact}
                          onChange={(e) => setSignatureContact(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact" className="flex gap-2">
                          {/* Contact <Info className="w-4 text-slate-400" /> */}
                          <HoverInfo
                            title="Mobile"
                            icon={<Info className="w-4 text-slate-400" />}
                            description="Note for PH employee: Please do not edit this number."
                          />
                        </label>
                        <Input
                          name="mobile"
                          placeholder={signatureMobile}
                          onChange={(e) => setSignatureMobile(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <SignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                          mobile={signatureMobile}
                          isWorkforce={true}
                        />
                        <GmailSignatureDialog
                          name={signatureName}
                          position={signaturePosition}
                          contact={signatureContact}
                          mobile={signatureMobile}
                          isWorkforce={true}
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          <div className="w-3/4">
            <SignaturePreview
              name={signatureName}
              position={signaturePosition}
              contact={signatureContact}
              mobile={signatureMobile}
              isWorkforce={isWorkforceUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignaturePage;
