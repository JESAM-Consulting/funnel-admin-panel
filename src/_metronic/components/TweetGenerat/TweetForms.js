
import React from 'react'
import { useEffect, useState } from 'react';
import { ApiGet } from '../../../helpers/API/ApiData';
import DeleteIcon from "@material-ui/icons/Delete";


const TweetForms = ({
     handelDelete,
     handleMultipleData,
     allData,
     dataIndex,
     index,
     erros,
     setErrors
}) => {

     const [categorys, setCategory] = useState([]);
     const [moods, setMoods] = useState([]);
     //const [addTweets, setAddTweets] = useState([]);


     useEffect(() => {
          getNewsData();
     }, []);

     const getNewsData = async () => {
          await ApiGet("category/find?page=1&limit=100")
               .then((res) => {
                    setCategory(res.data.data);
               })
               .catch((err) => {
                    console.log("err", err);
               });

          await ApiGet("mood/find?page=1&limit=100")
               .then((response) => {
                    setMoods(response.data.data);
               })
               .catch((err) => {
                    console.log("err", err);
               });
     };

     const onInputChang = (e) => {

          handleMultipleData(e, index)
          setErrors({ ...erros, [e.target.name + index]: "" })
     }

     // console.log("erros",erros)
     return (
          <div className=''>
               <div style={{ adding: " 12px 30px", border: "1px solid grey", margin: "10px", borderRadius: "12px", maxWidth: "800px", marginLeft: "25%" }}>
                    <div className="row mb-5 mt-8  ">
                         <label className="col-xl-3 col-lg-3 ">
                               Category :
                         </label>
                         <div className="col-lg-9 col-xl-6">
                              <select className='form-control' name="category" onChange={e => onInputChang(e, dataIndex)}>
                                   <option >--select Category--</option>
                                   {
                                        categorys?.map((item, index) => {
                                             return (
                                                  <>
                                                       <option selected="" value={item.categoryName} >{item.categoryName}</option>
                                                  </>
                                             )
                                        }
                                        )}
                              </select>
                              <span style={{ color: "red" }} > {erros?.["category" + index]}</span>
                         </div>
                    </div>
                    <div className="row mb-5  ">
                         <label className="col-xl-3 col-lg-3 ">
                              Mood :
                         </label>
                         <div className="col-lg-9 col-xl-6">
                              <select className='form-control
                              ' name="mood" onChange={e => onInputChang(e, dataIndex)} >
                                   <option >--select Mood--</option>
                                   {
                                        moods?.map((item, index) => {
                                             return (
                                                  <>
                                                       <option value={item.moodName} >{item.moodName}</option>
                                                  </>
                                             )
                                        }
                                        )}
                              </select>
                              <span style={{ color: "red" }} > {erros?.["mood" + index]}</span>
                         </div>
                    </div>
                    <div className="row mb-5  ">
                         <label className="col-xl-3 col-lg-3 ">
                              Phrase :
                         </label>
                         <div className="col-lg-9 col-xl-6">
                              <input
                                   type="text"
                                   value={allData[index].phrase}
                                   className="form-control"
                                   name="phrase"
                                   onChange={e => onInputChang(e, dataIndex)}
                              />
                              <span style={{ color: "red" }} > {erros?.["phrase" + index]}</span>
                         </div>
                    </div>
                    <div className="row mb-5  ">
                         <label className="col-xl-3 col-lg-3 ">
                              Tweet :
                         </label>
                         <div className="col-lg-6 col-xl-6">
                              <textarea
                                   type="text"
                                   value={allData[index].tweet}
                                   className="form-control "
                                   name="tweet"
                                   onChange={e => onInputChang(e, dataIndex)}
                                   required
                                   maxLength="280"
                                   placeholder='enter 280 character'
                                   rows="4"
                              />
                              <span style={{ color: "red" }} >  {erros?.["tweet" + index]}</span>
                         </div>
                    </div>

                    <div className="row mb-5  ">
                    <label className="col-xl-3 col-lg-3 ">
                    
                         </label>
                         <div className="col-lg-6 col-xl-6">
                              <button className="btn btn-danger btn-block " onClick={() => handelDelete(dataIndex)}>
                              <span style={{fontSize:"15px"}}><DeleteIcon /></span>
                              {/* <span style={{fontSize:"15px"}}>Delete</span> */}
                              </button>
                         </div>
                    </div>
               </div>

          </div>
     )
}

export default TweetForms