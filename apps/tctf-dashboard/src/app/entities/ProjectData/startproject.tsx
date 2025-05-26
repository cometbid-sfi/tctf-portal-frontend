"use client";

import "./style.css";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FiBox } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { MdInfo } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MultiSelect } from "react-multi-select-component";

// Import SVG files with type assertion
import FeaturedSvg from "../../../assets/images/Featured-Icon.svg";
import ArrowSvg from "../../../assets/images/Arrow-Right.svg";
import UploadSvg from "../../../assets/images/Placeholder-Image.svg";

// Create properly typed constants
const Featured: StaticImageData = FeaturedSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const Upload: StaticImageData = UploadSvg as unknown as StaticImageData;

// Define types
type SelectedItem = {
  value: string | number;
  label: string;
};

type ImageState = {
  print: string | ArrayBuffer | null;
  web: string | ArrayBuffer | null;
};

const steps = [
  { id: 1, name: "Step 1", title: "Requirements", icon: <FiBox /> },
  { id: 2, name: "Step 2", title: "Signing Authority", icon: <FaRegUser /> },
  { id: 3, name: "Step 3", title: "Review", icon: <VscPreview /> },
];

const options = [
  { label: "Java", value: "java" },
  { label: "SQL", value: "sql" },
  { label: "AWS", value: "aws" },
  { label: "Python", value: "python" },
  { label: "React", value: "react" },
  { label: "Angular", value: "angular" },
  { label: "Node", value: "node" },
  { label: "Flutter", value: "flutter" },
  { label: "Swift", value: "swift" },
  { label: "PHP", value: "php" },
  { label: "Ruby", value: "ruby" },
  { label: "Go", value: "go" },
  { label: "C++", value: "c++" },
  { label: "C#", value: "c#" },
];

const StartProjectData = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [images, setImages] = useState<ImageState>({
    print: null,
    web: null,
  });
  const [selected, setSelected] = useState<SelectedItem[]>([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prevImages => ({
          ...prevImages,
          [type]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (value: string | number) => {
    setSelected(prevSelected => prevSelected.filter(item => item.value !== value));
  };

  const colors = ["#ff4a4a", "#ff9516", "#ff2192", "#20bd00", "#00bccf", "#1b72ff", "#4222ff"];

  return (
    <>
      {/* Submit Project Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="custom-modal delete-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column gap-3 align-items-center">
            <div className="modal-icon">
              <Image src={Featured} alt="Featured icon" />
            </div>
            <div>
              <h4 className="modal-title">Thanks for starting a Project!</h4>
              <p className="modal-description">
                We have received your proposal to join a project. Relevant Project associates will
                reach out to you shortly for further steps.
              </p>
            </div>
            <div className="form-details">
              <div className="note-box">
                <div className="note-icon">
                  <MdInfo />
                </div>
                <div className="note-text">
                  <p>
                    Please download the Proposal in Pdf format, and keep it for reference purpose.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end w-100 gap-2">
              <button className="btn-outline" onClick={handleCloseModal}>
                Download PDF
              </button>
              <button className="btn-save" onClick={handleCloseModal}>
                Done
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="wrapper">
        <div className="d-flex align-items-center gap-2 page-info">
          <div className="page-title">
            <h3>Your Projects</h3>
          </div>
          <Image src={Arrow} alt="arrow" />
          <div className="page-title">
            <h3>Start a Project</h3>
          </div>
        </div>

        <div className="card-section-collaboration mt-20">
          <div className="step-form">
            {/* Step Header - Desktop */}
            <div className="step-header hide_mobile">
              <div className="d-flex align-items-center gap-3">
                {steps.map(step => (
                  <div
                    key={step.id}
                    className={`step-item step-${step.id} ${currentStep >= step.id ? "active" : ""}`}
                  >
                    <div className="step-header-card">
                      <div className="d-flex justify-content-between">
                        <div className="step-card-details">
                          <div className="step-icon">{step.icon}</div>
                          <div>
                            <div className="step-name">{step.name}</div>
                            <div className="step-title">{step.title}</div>
                          </div>
                        </div>
                        <div className="strp-completion">
                          <FaCircleCheck
                            className="step-completion"
                            style={{ color: currentStep > step.id ? "#28a745" : "#ccc" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Header - Mobile */}
            <div className="step-header show_mobile">
              <div className="d-flex align-items-center gap-3">
                {steps.map(step => (
                  <div
                    key={step.id}
                    className={`step-item step-${step.id} ${currentStep >= step.id ? "active" : ""}`}
                  >
                    <div className="step-header-card">
                      <div className="d-flex justify-content-between flex-column align-items-center gap-2">
                        <div className="step-card-details">
                          <div className="step-icon">{step.icon}</div>
                        </div>
                        <div className="step-name">{step.name}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Body */}
            <div className="step-body mt-30">
              {currentStep === 1 && (
                <div className="step-details step-1">
                  <div className="step-title">
                    Please complete the following details for Starting a new Project
                  </div>

                  <Form className="mt-3">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupName">
                          <Form.Label>Project name*</Form.Label>
                          <Form.Control type="text" placeholder="Project name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupTechnology">
                          <Form.Label>Project Category</Form.Label>
                          <Form.Select aria-label="Project category selection">
                            <option>Select</option>
                            <option value="1">Automotive & Mobility</option>
                            <option value="2">Banking</option>
                            <option value="3">Blockchain</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formGroupPitch">
                          <Form.Label>Pitch Statement*</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupProblem">
                          <Form.Label>Problem Statement*</Form.Label>
                          <Form.Control as="textarea" rows={5} />
                          <div className="text-length">1000 characters limit</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupGoals">
                          <Form.Label>Goals or Objectives*</Form.Label>
                          <Form.Control as="textarea" rows={5} />
                          <div className="text-length">1000 characters limit</div>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <div className="select-container">
                          <Form.Group controlId="formInterests" className="mb-3">
                            <Form.Label>Select Interest</Form.Label>
                            {selected.length > 0 && (
                              <ul className="selected-list">
                                {selected.map((item, index) => (
                                  <li
                                    key={item.value}
                                    style={{
                                      backgroundColor: colors[index % colors.length],
                                    }}
                                  >
                                    {item.label}{" "}
                                    <button
                                      onClick={() => handleRemove(item.value)}
                                      style={{
                                        marginLeft: "4px",
                                        color: "#ffffff",
                                        cursor: "pointer",
                                        background: "none",
                                        border: "none",
                                      }}
                                      type="button"
                                    >
                                      X
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            )}
                            <MultiSelect
                              options={options}
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              overrideStrings={{
                                selectSomeItems: "Type text and press enter to select interest",
                              }}
                              className="multi-select"
                            />
                          </Form.Group>
                        </div>
                      </Col>
                      {/* Upload Logo for Print */}
                      <Col md={6}>
                        <div className="upload-file mb-3">
                          <div className="d-flex align-items-center gap-3 flex-wrap">
                            <div className="image-preview">
                              {images.print ? (
                                <Image
                                  src={images.print as string}
                                  alt="Uploaded Print Logo"
                                  width={100}
                                  height={100}
                                />
                              ) : (
                                <Image
                                  src={Upload}
                                  alt="Upload Placeholder"
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                            <div className="file-details">
                              <div className="file-info mb-2">Logo for Print</div>
                              <div className="file-uploader">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={e => handleImageChange(e, "print")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>

                      {/* Upload Logo for Web */}
                      <Col md={6}>
                        <div className="upload-file">
                          <div className="d-flex align-items-center gap-3 flex-wrap">
                            <div className="image-preview">
                              {images.web ? (
                                <Image
                                  src={images.web as string}
                                  alt="Uploaded Web Logo"
                                  width={100}
                                  height={100}
                                />
                              ) : (
                                <Image
                                  src={Upload}
                                  alt="Upload Placeholder"
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                            <div className="file-details">
                              <div className="file-info mb-2">Logo for Web</div>
                              <div className="file-uploader">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={e => handleImageChange(e, "web")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step-details step-1">
                  <div className="d-flex gap-5 align-items-center">
                    <div className="step-title">Signing Authority</div>
                    <a className="step-link" href="#">
                      Who is a Signing authority?
                    </a>
                  </div>
                  <div className="step-subtitle">
                    Please indicate who has the signing authority for this agreement.
                  </div>

                  <Form className="mt-3">
                    <Row>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formGroupSameAsMember">
                          <Form.Check
                            aria-label="Same as Member Representative"
                            label="Same as Member Representative"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Mathew" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupLastName">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Parker" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupJobTitle">
                          <Form.Label>Job Title</Form.Label>
                          <Form.Select aria-label="Job title selection">
                            <option>Select</option>
                            <option value="1">Project Manager</option>
                            <option value="2">Team Lead</option>
                            <option value="3">Developer</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}

              {currentStep === 3 && (
                <div className="step-details step-1">
                  <div className="step-title">Review and Submit Your Completed Application</div>
                  <div className="step-subtitle">
                    Please review your completed Interest Group Application Form. If you would like
                    to update any information, please click the Back Button.
                  </div>
                  <div className="step-subtitle-2">Please click SUBMIT when ready.</div>

                  <Form className="mt-3">
                    <Row>
                      {/* Upload Logo for Print */}
                      <Col md={6}>
                        <div className="upload-file mb-3">
                          <div className="d-flex align-items-center gap-3 flex-wrap">
                            <div className="image-preview">
                              {images.print ? (
                                <Image
                                  src={images.print as string}
                                  alt="Uploaded Print Logo"
                                  width={100}
                                  height={100}
                                />
                              ) : (
                                <Image
                                  src={Upload}
                                  alt="Upload Placeholder"
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                            <div className="file-details">
                              <div className="file-info mb-2">Logo for Print</div>
                              <div className="file-uploader">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={e => handleImageChange(e, "print")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>

                      {/* Upload Logo for Web */}
                      <Col md={6}>
                        <div className="upload-file mb-3">
                          <div className="d-flex align-items-center gap-3 flex-wrap">
                            <div className="image-preview">
                              {images.web ? (
                                <Image
                                  src={images.web as string}
                                  alt="Uploaded Web Logo"
                                  width={100}
                                  height={100}
                                />
                              ) : (
                                <Image
                                  src={Upload}
                                  alt="Upload Placeholder"
                                  width={100}
                                  height={100}
                                />
                              )}
                            </div>
                            <div className="file-details">
                              <div className="file-info mb-2">Logo for Web</div>
                              <div className="file-uploader">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={e => handleImageChange(e, "web")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupProjectName">
                          <Form.Label>Project name*</Form.Label>
                          <Form.Control type="text" placeholder="Group name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupProjectCategory">
                          <Form.Label>Project Category?</Form.Label>
                          <Form.Select aria-label="Project category selection">
                            <option>Select</option>
                            <option value="1">Automotive & Mobility</option>
                            <option value="2">Banking</option>
                            <option value="3">Blockchain</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group className="mb-3" controlId="formGroupPitchReview">
                          <Form.Label>Pitch Statement*</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupProblemReview">
                          <Form.Label>Problem Statement*</Form.Label>
                          <Form.Control as="textarea" rows={5} />
                          <div className="text-length">1000 characters limit</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupGoalsReview">
                          <Form.Label>Goals or Objectives*</Form.Label>
                          <Form.Control as="textarea" rows={5} />
                          <div className="text-length">1000 characters limit</div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupFirstNameReview">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" placeholder="Mathew" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupLastNameReview">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Parker" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupEmailReview">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formGroupJobTitleReview">
                          <Form.Label>Job Title</Form.Label>
                          <Form.Select aria-label="Job title selection">
                            <option>Select</option>
                            <option value="1">Project Manager</option>
                            <option value="2">Team Lead</option>
                            <option value="3">Developer</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </div>
              )}
            </div>

            {/* Step Footer (Navigation Buttons) */}
            <div className="step-footer">
              <div className="d-flex justify-content-end gap-3">
                <button
                  className="btn-back"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  type="button"
                >
                  Back
                </button>
                {currentStep < steps.length && (
                  <button className="btn-next" onClick={nextStep} type="button">
                    Next
                  </button>
                )}

                {currentStep === steps.length && (
                  <button className="btn-next" onClick={handleShowModal} type="button">
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartProjectData;
