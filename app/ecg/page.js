"use client";
import React from "react";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["CSV"];
import axios from 'axios';


const page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [validateName, setValidateName] = useState(true);
  const [validateAge, setValidateAge] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);


  const handleChange = (uploadedFile) => {
    setLoading(true);
    setFile(URL.createObjectURL(uploadedFile));
  };


  const validate = () => {
    if (name == "") {
      setValidateName(false);
    } else {
      setValidateName(true);
    }

    if (age > 0 && age < 100) {
      setValidateAge(true);
    } else {
      setValidateAge(false);
    }

    if (name != "" && age > 0 && age < 100) {
      fetch();
      setLoading(true);
    }
  };

  const fetch = async () => {
    const docRef = doc(db, "ecg", name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      console.log("Document data:", docSnap.data());
      setLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append('file',URL.createObjectURL(e));
  
    try {
        const response = await axios.post('http://localhost:5000/upload-csv', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setAnalysis(response.data);
        setData(response.data)
    } catch (error) {
        console.error('Error uploading file:', error);
    }
    finally{
      setLoading(false)
    }
};


  return (
    <>
      {loading ? (
        <div className="loading h-screen flex items-center justify-center">
          <svg width="64px" height="48px">
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="back"
            ></polyline>
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="front"
            ></polyline>
          </svg>
        </div>
      ) : (
        <>
          {!data ? (
            <>
              <div className="bg-blue-200 min-h-screen flex items-center">
                <div className="w-full">
                  <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                    {/* <div>
                      <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">
                          Username
                        </label>
                        {!validateName ? (
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Put in your username"
                            className="border border-red-300 shadow p-3 w-full rounded text-gray-900"
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder="Put in your username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-gray-300 shadow p-3 w-full rounded text-gray-900"
                          />
                        )}
                        {!validateName && (
                          <p className="text-sm text-red-400 mt-2">
                            Full Name is required
                          </p>
                        )}
                      </div>

                      <div className="mb-5">
                        <label className="block mb-2 font-bold text-gray-600">
                          Age
                        </label>
                        {!validateAge ? (
                          <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Put in your age."
                            className="border  border-red-300 shadow p-3 w-full rounded text-gray-900"
                            min="1"
                            max="100"
                          />
                        ) : (
                          <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Put in your age."
                            className="border  border-gray-300 shadow p-3 w-full rounded text-gray-900"
                            min="1"
                            max="100"
                          />
                        )}
                        {!validateAge && (
                          <p className="text-sm text-red-400 mt-2">
                            Invalid age
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => validate()}
                        className="py-3 px-8 bg-gray-900 text-gray-100 font-bold rounded"
                      >
                        Submit
                      </button>
                    </div> */}
                    <div className="flex justify-center items-center w-full ">
                      <FileUploader
                        handleChange={handleSubmit}
                        name="file"
                        types={fileTypes}
                        style={{ width: "100%" }}
                      />
                    </div>
                    {/* {file && (
                <div style={{ marginTop: "20px" }}>
                    <h4>Image Preview:</h4>
                    <img 
                        src={file} 
                        alt="Uploaded Preview" 
                        style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            )} */}
                  </div>
                  <h1 className="text-center text-xs text-gray-600 font-bold  mt-10">
                    *File you recieved after diagnosis
                  </h1>
                </div>
              </div>

              <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16">
                <h2 className="flex-row gap-3 text-5xl	 items-center m-auto font-bold md:flex-col md:gap-2 text-black">
                  Hey {name} 👋
                </h2>
                <div className="flex flex-col gap-3.5 w-full  rounded-md  bg-orange-100	sm:max-w-4xl m-auto p-10">
                  <ul className="flex flex-col gap-3.5 w-full sm:max-w-3xl m-auto">
                    <li className="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold ">
                      Cholestorol
                      <span className="float-end bg-red-200 py-2 px-10 rounded mx-1">
                        False
                      </span>
                    </li>
                    <li className="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold">
                      Cardiomegally
                      <span className="float-end bg-red-200 py-2 px-10 rounded mx-1">
                        False
                      </span>
                    </li>
                    <li className="w-full bg-green-200 p-3  text-3xl	 rounded-md text-black font-bold">
                      Abnormalities
                      <span className="float-end bg-red-200 py-2 px-10 rounded mx-1">
                        False
                      </span>
                    </li>
                    <li className="w-full bg-green-200 p-3 text-3xl	 rounded-md text-black font-bold">
                      Previous Heart-Attacks
                      <span className="float-end bg-red-200 py-2 px-10 rounded mx-1">
                        False
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default page;
