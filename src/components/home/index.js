import React, { useRef } from 'react';
import {Notify, Button, Typography} from 'cant-ui/core';
import {isEmail} from 'cant-ui/utils';
import './style.scss';
import Logo from '../../assets/images/logo-name.png';
import overall from '../../assets/images/home/overall.png';
import introduce from '../../assets/images/home/introduce.png';
import procedure from '../../assets/images/home/procedure.png';
// import review from '../../assets/images/home/review.jpg';
import contact from '../../assets/images/home/contact.png';

const next = <svg x="0px" y="0px" viewBox="0 0 489.6 489.6">
    <g>
        <path d="M0,244.8c0,9.5,7.7,17.2,17.2,17.2h414.2L322.9,370.4c-3.3,3.3-5,7.7-5,12.1s1.7,8.8,5,12.1c6.7,6.7,17.6,6.7,24.3,0
            l137.6-137.7c6.4-6.4,6.4-17.8,0-24.3L347.1,95c-6.7-6.7-17.6-6.7-24.3,0c-6.7,6.7-6.7,17.6,0,24.3l108.4,108.4H17.1
            C7.6,227.6,0,235.3,0,244.8z"/>
    </g>
</svg>

const Home = (props) => {
    const inputRef = useRef(null);
    const notifyRef = useRef(null);

    const notifyHandler = () => {
        const value = inputRef.current.value;
        if (!value || !isEmail(value)) {
            inputRef.current.classList.add('error');
            return;
        }
        inputRef.current.classList.remove('error');
        inputRef.current.value = '';
        notifyRef.current.add(`Đăng ký nhận tin thành công!`);
    }

    return (
        <div className={'AH_Home'}>
            <div className={'AH_Overall'}>
                <div className={'AH_Overall_Logo'}>
                    <img src={Logo} alt={'Aqua Homez Logo'} />
                </div>
                <div className={'AH_Overall_Img'}>
                    <img src={overall} alt="Tổng thể" />
                </div>
                <div className={'AH_Overall_Info'}>
                    <span className={'AH_Overall_Info_Website'}>AQUAHOMEZ.VN</span>
                    <span className={'AH_Overall_Info_Slogan'}>Kết nối trao giá trị</span>
                    <hr />
                    <span className={'AH_Overall_Info_Description'}>Dịch vụ tư vấn phòng cho thuê hàng đầu TP. HCM</span>
                </div>
            </div>
            <div className={'AH_Introduce'}>
                <div className={'AH_Introduce_Top'}>
                    <div className={'AH_Introduce_Top_Content'}>
                        <span className={'AH_Introduce_Top_Content_Svg'}>
                            {next}
                        </span>
                        <span className={'AH_Introduce_Top_Content_Text'}>Giới thiệu về công ty</span>
                    </div>
                </div>
                <div className={'AH_Introduce_Img'}>
                    <img src={introduce} alt="Giới thiệu" />
                </div>
                <div className={'AH_Introduce_Bottom'}>
                    <div className={'AH_Introduce_Bottom_Description'}>
                        Với 03 năm kinh nghiệm trong ngành cùng 2000 căn hộ và phòng trọ cho thuê tại TP. HCM,
                        AQUA HOMEZ tự tin là công ty tư vấn phòng cho thuê giúp khách hàng tìm được chỗ ở phù hợp nhất.
                    </div>
                </div>
            </div>
            <div className={'AH_Procedure'}>
                <img src={procedure} alt="Quy trình" />
                <div className={'AH_Procedure_Order'}>
                    <span className={'AH_Procedure_Order_Main'}>Chuyên môn của chúng tôi</span>
                    {next}
                    <span className={'AH_Procedure_Order_Secondary'}>Tư vấn căn hộ dịch vụ</span>
                    {next}
                    <span className={'AH_Procedure_Order_Secondary'}>Tư vấn phòng trọ</span>
                </div>
            </div>
            <div className={'AH_Contact'}>
                <div className={'AH_Contact_Img'}>
                    <img src={contact} alt="Liên hiện" />
                </div>
                <div className={'AH_Contact_Info'}>
                    <div className={'AH_Contact_Info_Title'}>
                        {next}
                        <span className={'AH_Contact_Info_Title_Text'}>Cách liên hệ với chúng tôi</span>
                    </div>
                    
                    <div className={'AH_Contact_Info_Details'}>
                        <div className={'AH_Contact_Info_Address'}>
                            <div className={'AH_Contact_Info_Type'}>
                                Địa chỉ thư tín
                            </div>
                            <div className={'AH_Contact_Info_Value'}>
                                R1 - R3 Hưng Gia 5, Tân Phong, Quận 7, TP. HCM
                            </div>
                        </div>
                        <div className={'AH_Contact_Info_Email'}>
                        <div className={'AH_Contact_Info_Type'}>
                                Địa chỉ Email
                            </div>
                            <div className={'AH_Contact_Info_Value'}>
                                help@aquahomez.com
                            </div>
                        </div>
                        <div className={'AH_Contact_Info_Phone'}>
                        <div className={'AH_Contact_Info_Type'}>
                                Số điện thoại
                            </div>
                            <div className={'AH_Contact_Info_Value'}>
                                0906 908 004
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'AH_Receive_Notify'}>
                <Typography variant={'subhead'} text={'Nhận tin phòng mới từ Aqua Homez'} />
                <input type="text" placeholder={'Email hoặc số điện thoại'} ref={inputRef} />
                <Button style={{borderRadius: '20px'}} label={'Đăng ký'} onClick={notifyHandler} />
            </div>
            <Notify ref={notifyRef} position={{vertical: 'top', horizontal: 'right'}} width={340} />
        </div>
        // <div className={'AH_Body'}>
        //     <div className={'AH_Body_Main'}>
        //         <div className={'AH_Body_Content'}>
        //             <img src={introduce1} alt="Introduce" />
        //             <ul>
        //                 <li>Đơn vị phân phối uy tính hàng đầu khu vực Thành Phố Hồ Chí Minh</li>
        //                 <li>Hàng trăm căn hộ, phòng trọ cập nhật thường xuyên</li>
        //                 <li>Phòng đẹp, an toàn, tiện nghi</li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className={'AH_Body_Main'}>
        //         <div className={'AH_Body_Content'}>
        //             <div className={'AH_Body_Content--area'}>
        //                 <img src={introduce2} alt="Khu vực hoạt động" />
        //                 <div className={'AH_Body_Content--description'}>
        //                     <Typography variant={'h1'} text={'Tân Phú'} fullWidth style={{textAlign: 'right'}}/>
        //                     <Typography variant={'body'} text={'Trên 200 phòng đã cho thuê'} fullWidth />
        //                     <Typography variant={'h1'} text={'Tân Bình'} fullWidth style={{textAlign: 'right'}}/>
        //                     <Typography variant={'body'} text={'Trên 100 phòng đã cho thuê'} fullWidth />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className={'AH_Body_Content'}>
        //             <div className={'AH_Body_Content--orientate'}>
        //                 <div className={'AH_Body_Content--description'}>
        //                     <Typography variant={'body'} fullWidth text={'Phủ toàn thành phố'} />
        //                     <Typography variant={'body'} fullWidth text={'Với trên 200 nhân sự và đối tác'} />
        //                 </div>
        //                 <img src={introduce3} alt="Định hướng" />
        //             </div>
        //         </div>
        //     </div>
        //     <div className={'AH_Body_Post'}>
        //         <div className={'AH_Body_Recruitment'}>
        //             <Typography variant={'h1'} text={'Thông tin tuyển dụng'} color={'#009BF8'} fullWidth />
        //             <div className={'AH_Body_Recruitment-box'}>
        //                     <Typography variant={'subhead'} fullWidth>
        //                         <Link to={'/tuyen-dung'}>Nhân viên kinh doanh, cho thuê phòng</Link>
        //                     </Typography>
        //                 <Typography variant={'body'} text={'Không yêu cầu bằng cấp'} fullWidth />
        //                 <Typography variant={'body'} text={'Thời gian linh động'} fullWidth />
        //                 <Typography variant={'body'} text={'Thu nhập 5-10 triệu'} fullWidth />
        //             </div>
        //             <div className={'AH_Body_Recruitment-box'}>
        //                 <Typography variant={'subhead'} fullWidth>
        //                     <Link to={'/tuyen-dung'}>Cộng tác viên marketing, part-time</Link>
        //                 </Typography>
        //                 <Typography variant={'body'} text={'Không yêu cầu bằng cấp'} fullWidth />
        //                 <Typography variant={'body'} text={'Thời gian theo ca, phù hợp với sinh viên'} fullWidth />
        //                 <Typography variant={'body'} text={'Thu nhập 2.5-5 triệu tùy năng lực'} fullWidth />
        //             </div>
        //         </div>
        //         <div className={'AH_Body_Article'}>
        //             <Typography variant={'h1'} text={'Bài viết'} color={'#009BF8'} fullWidth />
        //             <div className={'AH_Body_Article-box'}>
        //                 <Typography variant={'subhead'} fullWidth>
        //                     <Link to={'/bai-viet'}>Kinh nghiệm chọn phòng phù hợp</Link>
        //                 </Typography>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Giá thành'} fullWidth />
        //                 </div>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Thời gian thoải mái'} fullWidth />
        //                 </div>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Nuôi thú cưng'} fullWidth />
        //                 </div>
        //             </div>
        //             <div className={'AH_Body_Article-box'}>
        //                 <Typography variant={'subhead'} fullWidth>
        //                     <Link to={'/bai-viet'}>Đi xem trọ nên xem gì</Link>
        //                 </Typography>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Vị trí, khu vực'} fullWidth />
        //                 </div>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Thời tiết, mưa gió, ngập nước'} fullWidth />
        //                 </div>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'An ninh, bãi giữ xe'} fullWidth />
        //                 </div>
        //                 <div className={'AH_Body_Article-main'}>
        //                     <Flag color={'#009BF8'} />
        //                     <Typography variant={'body'} text={'Cáp quang, mạng không dây'} fullWidth />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className={'AH_Body_Review'}>
        //         <div className={'AH_Body_Review-content'}>
        //             <Typography variant={'h1'} text={'Đánh giá từ khách hàng và đối tác'} color={'#009BF8'} fullWidth />
        //             <Typography text={'Văn Tèo: Đánh giá abc'} color={'#009BF8'} fullWidth />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home;
