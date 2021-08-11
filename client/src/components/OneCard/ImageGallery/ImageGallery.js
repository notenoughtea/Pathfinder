import ImageGallery from "react-image-gallery";
import { Form, Accordion, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { axiosGallery } from "../../../store/gallerySlice";

function MyDropzone() {
  const { id } = useParams();
  const userId = localStorage.id
  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append("333", acceptedFiles[0]);
    formData.append("user_id", userId);
    formData.append("routes_id", id);
    axios.post("/upload/image", formData);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Card>
        <Card.Body>Кладите сюда</Card.Body>
      </Card>
      ) : (
        <Card>
          <Card.Body>Перетащите сюда или кликните для добавления фото</Card.Body>
        </Card>
      )}
    </div>
  );
}

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "http://127.0.0.1:3001/img/30feac44-6b4a-4811-89e8-93eb22151c3b-screenshot-from-2021-06-19-12-52-02.png",
    thumbnail: "http://127.0.0.1:3001/img/30feac44-6b4a-4811-89e8-93eb22151c3b-screenshot-from-2021-06-19-12-52-02.png",   
  },
];

export default function Gallery() {

  const dispatch = useDispatch()
  const { id } = useParams();
  const images = useSelector(state => state.gallery.photo)

  console.log(images);

  const handler = useCallback(()=>{
    dispatch(axiosGallery(id))
  },[])
  useEffect(()=>{
    handler()
  }, [handler ])
  

  // photo.push({
  //   original: "http://127.0.0.1:3001/img/30feac44-6b4a-4811-89e8-93eb22151c3b-screenshot-from-2021-06-19-12-52-02.png",
  //   thumbnail: "http://127.0.0.1:3001/img/30feac44-6b4a-4811-89e8-93eb22151c3b-screenshot-from-2021-06-19-12-52-02.png",   
  // })

  // console.log(images);

  return (
    <>
      <Accordion style={{ marginBottom: "20px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Добавить свое фото</Accordion.Header>
          <Accordion.Body>
            <MyDropzone />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group> */}
      <ImageGallery items={images} />
    </>
  );
}
