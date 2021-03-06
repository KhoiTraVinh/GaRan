import React, { useEffect, useState } from 'react';
import {Form,Button} from 'react-bootstrap'
import api from '../../utils/apicaller';
import {Redirect,useLocation} from 'react-router-dom';



    

const DienThongTin = (props) => {

    const [txtHoTen, setHoTen] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtSDT, setSDT] = useState('');
    const [txtDiaChiNha, setDCN] = useState('');
    const [txtPhuong, setPhuong] = useState('');
    const [txtQuan, setQuan] = useState('');
    const [redirect, setRedirect] = useState(false);
    let location= useLocation();

    const onSave =async (e= SyntheticEvent) => {
        e.preventDefault();
        const User={
            HoTen : txtHoTen,
            SDTKH : txtSDT,
            Email : txtEmail,
            DiaChi : txtDiaChiNha + txtPhuong + txtQuan,
        }
        location.state.setUser()
        setRedirect(true);
    }
        if(redirect){
            return <Redirect to="/Basket"/>
        }
        return (
            <div className="container">
                <h1>Hãy là thành viên của KFC</h1>
            <Form onSubmit = {onSave}>
                <Form.Group>
                    <Form.Label>Họ Tên</Form.Label>
                    <Form.Control type="text" placeholder="DuongThienKhoi" name = "txtHoTen" value={txtHoTen} onChange = {(e)=>setHoTen(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="thienkhoiduong@gmail.com" name = "txtEmail" value={txtEmail} onChange = {(e)=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Số Điện Thoại</Form.Label>
                    <Form.Control type="text" placeholder="098306xxxx" name = "txtSDT" value={txtSDT} onChange = {(e)=>setSDT(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Địa Chỉ Nhà</Form.Label>
                    <Form.Control type="text" placeholder="82/53/2 Định Bộ Lĩnh" name = "txtDiaChiNha" value={txtDiaChiNha} onChange = {(e)=>setDCN(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phường</Form.Label>
                    <Form.Control type="text" placeholder="Phường 26" name = "txtPhuong" value={txtPhuong} onChange = {(e)=>setPhuong(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quận</Form.Label>
                    <Form.Control as="select" name = "txtQuan" value={txtQuan} onChange = {(e)=>setQuan(e.target.value)}>
                        <option value='Quận 1'>Quận 1</option>
                        <option value='Quận 2'>Quận 2</option>
                        <option value='Quận 3'>Quận 3</option>
                        <option value='Quận 4'>Quận 4</option>
                        <option value='Quận 5'>Quận 5</option>
                        <option value='Quận 6'>Quận 6</option>
                        <option value='Quận 7'>Quận 7</option>
                        <option value='Quận 8'>Quận 8</option>
                        <option value='Quận 9'>Quận 9</option>
                        <option value='Quận 10'>Quận 10</option>
                        <option value='Quận 11'>Quận 11</option>
                        <option value='Quận 12'>Quận 12</option>
                        <option value='Quận Thủ Đức'>Thủ Đức</option>
                        <option value='Quận Bình Tân'>Bình Tân</option>
                        <option value='Quận Tân Bình'>Tân Bình</option>
                        <option value='Quận Bình Chánh'>Bình Chánh</option>
                        <option value='Quận Nhà Bè'>Nhà Bè</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng Kí
                </Button>
            </Form>
            </div>
        );
}
export default DienThongTin;