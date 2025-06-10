"use client";

import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const AuthenticationContent: React.FC = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-title">{/* <h2 className="hero-title">Sign In</h2> */}</div>
        </div>
      </section>
      <div className="loginsection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-8 col-lg-5">
              <div className="logincontent">
                <div className="form-content">
                  <h2 className="text-center">Verify it&apos;s you.</h2>
                  <p className="text-center">
                    Please open your Google Authenticator app and enter the code below to sign in.
                  </p>
                  <Form>
                    <Form.Group className="" controlId="exampleForm.ControlInput1">
                      <div className="auth-label">Authentication Code</div>
                      <div className="d-flex justify-content-center">
                        {code.map((digit, index) => (
                          <input
                            key={index}
                            ref={el => {
                              inputsRef.current[index] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={e => handleChange(index, e.target.value)}
                            onKeyDown={e => handleKeyDown(index, e)}
                            className="otp-input"
                          />
                        ))}
                      </div>
                    </Form.Group>
                  </Form>
                  <div className="btn-center">
                    <Button type="submit" className="login-btn">
                      Recover Username
                    </Button>
                  </div>
                  <div className="login mt-3 text-center">
                    <Link href="/login" className="link-btn">
                      Go back to Sign In.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationContent;
