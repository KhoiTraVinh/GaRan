import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

const ThanhToanButton = (props) => {
    const callbackFunction=(data)=>{
        props.setUser(data)
    }
    return <NavLink to={{pathname:'/DienThongTin', state:{setUser:props.setUser}}} style={{width:"100%", height:"50%", marginTop: 20}} className="btn btn-danger">Tiến hành thanh toán</NavLink>
}

export default ThanhToanButton