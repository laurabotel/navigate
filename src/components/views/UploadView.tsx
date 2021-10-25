import React from 'react';
import {useDropzone} from 'react-dropzone';
import { isLabeledStatement } from 'typescript';

export default function UploadView() {
  const yamlFiles: Array<string | ArrayBuffer> = [];
  const onDrop = React.useCallback(acceptedFiles => {
    acceptedFiles.forEach((file: File, index: Number, array: Array<File>) => {
      let isLastElement = false;
      const reader = new FileReader();
      isLastElement = (index === array.length - 1)
        //when last element is done, make a POST request
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const data = reader.result;
        if(data)
          yamlFiles.push(data);
        if(isLastElement)
          fetch('http://localhost:3000/uploadFiles', {
            method: 'POST',
            body: JSON.stringify(yamlFiles)
          })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('POST ERROR: ' + error));
      }
      reader.readAsText(file);
      console.log("pushing");
    })
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop, multiple: true})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        //some logo here
          <div>
          <p>Click here to upload your YAML config files and begin using Navigate...</p>
          </div>
      }
    </div>
  );
}