import React,{ useState,useEffect} from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FavoriteIcon from '@material-ui/icons/Favorite';
import green from '@material-ui/core/colors/lightGreen';

const CareerPage = () => {
    const [data, setData] = useState({
        title: "",
        shortDesc: "",
        workplaceType:""
    })
    useEffect(() => {
        const data1=JSON.parse((localStorage.getItem('myData')))
        setData({ ...data, title: data1[0].title, shortDesc: data1[0].shortDesc, workplaceType: data1[0].workplaceType })
    },[data]);
    
    
      return (
      <>
          <div className="container mt-3">
              <h2>Business Systems</h2>
              <div className="bg-white row p-3" style={{borderRadius:"15px"}}>
                  <h3 className="col-md-12">{data.title}</h3>
                      <p className="col-md-10 fs-5">{ data.shortDesc}</p>
                  <div className="col-md-2">
                      <div className="d-flex align-items-center justify-content-center"><AttachMoneyIcon className="fs-2" style={{color:green["A400"]}}/><span className="fw-bold fs-4" style={{color:green["A400"]}}>Paid</span></div>
                      <div className="mt-2 d-flex align-items-center justify-content-center"><FavoriteIcon className="text-danger fs-2"/><span className="text-danger fw-bold fs-5">Gratis</span></div>
                  </div>
                  <div className="col-md-12 fs-3">{data.workplaceType}</div>
              </div>
          </div>
    </>
  )
}

export default CareerPage