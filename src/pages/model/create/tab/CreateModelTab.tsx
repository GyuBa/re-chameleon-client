import React, {useEffect, useState} from 'react';
import {Button, Header, SubmitButton} from "../../../../components";
import {tabsData} from "../../../../assets/Dummy";
import {Link, useNavigate} from "react-router-dom";
import {useStateContext} from "../../../../contexts/ContextProvider";
import {useDropzone} from "react-dropzone";

type IFile = File & { preview?: string };

export default function CreateModelTab(number: number) {
  const navigate = useNavigate();
  const {currentColor} = useStateContext();
  const [hideDrop, setHideDrop] = useState<boolean>(false);
  const [files, setFiles] = useState<IFile[]>([]);
  const [modelName, setModelName] = useState<string>('');
  const [inputType, setInputType] = useState<string>('');
  const [outputType, setOutputType] = useState<string>('image');
  const [regionName, setRegionName] = useState<string>('');

  const handleModelNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setModelName(event.target.value);
  };
  const handleInputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(event.target.value);
  };
  const handleOutputTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOutputType(event.target.value);
  };
  const handleRegionNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionName(event.target.value);
  };

  const handleClick = () => {
    navigate("/model/create/description", {
      state: {
        files: files,
        modelName: modelName,
        inputType: inputType,
        outputType: outputType,
        regionName: regionName,
      },
    });
  };

  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'application/x-tar': []
    },
    onDrop: acceptedFiles => {
      setHideDrop(true);
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const acceptedFileItems = files.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    return () => files.forEach(file => URL.revokeObjectURL(file.preview as string));
  }, [files]);

  const removeFile = () => {
    setFiles([]);
    setHideDrop(false);
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-end">
          <Header category="" title="Model Creation"/>
          <h1 className="mx-2 text-gray-500">{tabsData[number].label}</h1>
        </div>
        <div className="flex gap-3 float-right">
          <Link to="/model">
            <Button style={{backgroundColor: "white", color: "black", borderRadius: "10px"}}
                    className="w-16 p-2" text="back"/>
          </Link>
          <SubmitButton onClick={handleClick}
                        style={{backgroundColor: currentColor, color: "white", borderRadius: "10px"}}
                        className="w-16" text="next"/>
        </div>
      </div>
      <div className="gap-4 grid md:pt-10 md:px-5 md:my-2 md:grid-cols-2">
        <div>
          <div className="md:mt-0 mt-5 mb-3">
            <h1 className="md:py-5 text-xl font-bold">Model Name</h1>
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
              id="model-name"
              placeholder="Model Name"
              value={modelName}
              onChange={handleModelNameChange}/>
          </div>
          <div className="mb-3">
            <h1 className="md:py-5 text-xl font-bold">Input Type</h1>
            <select id="Input"
                    className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                    value={inputType}
                    onChange={handleInputTypeChange}>
              <option selected value="none">(None)</option>
              <option value="image">Image</option>
              <option value="binary">Binary</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="mb-3">
            <h1 className="md:py-5 text-xl font-bold">Output Type</h1>
            <select id="Output"
                    className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                    value={outputType}
                    onChange={handleOutputTypeChange}>
              <option selected value="image">Image</option>
              <option value="binary">Binary</option>
              <option value="text">Text</option>
            </select>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h1 className="md:py-5 text-xl font-bold">Model Region</h1>
            <select id="countries"
                    className="form-control block w-full px-4 py-2 text-base font-normal
                  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white
                  focus:border-blue-600 focus:outline-none"
                    value={regionName}
                    onChange={handleRegionNameChange}>
              <option selected>(None)</option>
              <option value="mongle">Mongle</option>
              <option value="ripper">Ripper</option>
              <option value="snowly">Snowly</option>
            </select>
          </div>
          <div className="mb-3">
            <h1 className="md:py-5 text-xl font-bold">File Upload</h1>
            <div
              className="py-5 rounded border border-solid border-gray-300 text-center item-center">
              <img style={{width: '60px'}} alt="img"
                   className="object-cover w-full inline-block align-middle" src={tabsData[number].img}/>
              <section className="container">
                <div {...getRootProps()}
                     className={hideDrop ? "hidden" : "dropzone cursor-pointer"}>
                  <input {...getInputProps()} />
                  <p className="inline-block px-1 text-gray-500 hover:text-gray-700">
                    Drag & drop some files here, or click to select files</p>
                </div>
                <ul className="px-5 pb-5 pt-2">{acceptedFileItems}</ul>
                <div className="pr-3">
                  <SubmitButton onClick={removeFile} text="Remove"
                                className="float-right text-sm py-1 px-1.5 border border-gray border-solid
                                rounded-md hover:border-black"/>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};