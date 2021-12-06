import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import FieldItem from './FieldItem';
import './Form.css';
import axios from 'axios';
const jwt = require("jsonwebtoken");
const multer = require('multer');




const ProductForm = () => {
  const [baseImage, setBaseImage] = useState("");
  const [Types, setTypes] = useState([]);
  const decoded_token = jwt.verify(sessionStorage.getItem('__TOKEN__'), 'tokenkey');
  let history = useHistory();
  const titleRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    const fetchTypes = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_API_URL}/products/types`,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
        },
      }).then((response) => {
        setTypes(response.data);
      }).catch((error) => {
        console.error('There was an error!', error);
      });
    }
    fetchTypes();
  }, [])


  const handlefile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);

  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      type: typeRef.current.value,
      status: 'OPENED',
      description: descriptionRef.current.value,
      price: priceRef.current.value,
      image: baseImage,
      seller: decoded_token.firstName + ' ' + decoded_token.lastName
    };
    console.log(data);
    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_API_URL}/products`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('__TOKEN__')
      },
      data: data
    }).then((response) => {
      history.push('/products');
    }).catch((error) => {
      console.error('There was an error!', error);
    });
  };

  return (
    <form className="form-form" onSubmit={handleSubmit} >
      <FieldItem ref={titleRef} label="title:" type="text" />
      <select id="option" ref={typeRef}>
        {Types.map(content =>
          <option key={content.key} value={content}>{content}</option>
        )};
      </select>
      <FieldItem ref={descriptionRef} label="description:" type="text" />
      <FieldItem ref={priceRef} label="price:" type="number" />
      <input type="file" name="upload_file" id="file" onChange={handlefile} ></input>
      <img src={baseImage} height="100px" />
      <div>
        <button className="submit-btn-form"  >ADD</button>
      </div>
    </form>
  );
};

export default ProductForm;
