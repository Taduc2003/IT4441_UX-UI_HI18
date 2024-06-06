import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { toast } from "react-toastify";
import "./Personal.css";
import Header from "../header/Header";
import { MdMailOutline, MdPhone } from "react-icons/md";
import { IoGlobeOutline, IoLocationOutline } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";

const Personal = () => {

  const profile = {
    name: "Tá Đức",
    email: "guannguyen5691@gmail.com",
    phone: "03696969696",
    address: "Tạ Quang Bửu, Bách Khoa, Hai Bà Trưng, Hà Nội",
    facebook: "https://www.facebook.com/guan.nguyenhoang25/",
    dob: new Date("1996-01-25"),
    jobTitle: "Giảng viên đại học",
    institution: "Trường CNTT & TT, Đại học Bách khoa Hà Nội",
    joinDate: new Date("2023-05-20"),
    primaryEmail: "guannguyen5691@gmail.com",
    backupEmail: "guandz1234@gmail.com",
    avatar: "../../img/ducavatar.png", // Replace with actual path or URL to the avatar
  }

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setProfile({ ...profile, [name]: value });
  // };

  // const handleDateChange = (name, date) => {
  //   setProfile({ ...profile, [name]: date });
  // };

  const notify = () => {
    toast.success("Thay đổi thành công!");
  }

  const [showBasicModal, setShowBasicModal] = useState(true);

  // Function to toggle modal visibility
  const toggleBasicModal = () => {
    setShowBasicModal(!showBasicModal);
  };

  const [showDetailModal, setShowDetailModal] = useState(true);

  // Function to toggle modal visibility
  const toggleDetailModal = () => {
    setShowDetailModal(!showDetailModal);
  };

  // Function to trigger file input click
  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="admin-container">
      <Sidebar />

      <div className="main-content">
        <Header />
        <div className="profile">
          <div className="profile-header">
            {/* <div className="cover-image">
              <button
                className="change-cover-btn"
                onClick={handleFileInputClick}
              >
                Đổi ảnh bìa
              </button>
            </div> */}
            <div className="avatar-container">
              <div className="profile-avatar">
                <button
                  className="change-avatar-btn"
                  onClick={handleFileInputClick}
                >
                  Đổi avatar
                </button>
                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div>
              <h1 className="profile-username">Tá Đức</h1>
            </div>
          </div>

          <div className="profile-details">
            <div className="detailed-info">
              {/* <h2>Thông tin chi tiết</h2> */}
              <div className="profile-info">
                {showDetailModal ? (
                  <p>
                    <span className="title">Chức vụ</span>: {profile.jobTitle}
                  </p>
                ) : (
                  
                  <div className="onInput">
                    <span className="title">Chức vụ</span>:
                      <input type="email" placeholder="Chức vụ" />
                  </div>
                )}
              </div>
              <div className="profile-info">
                {showDetailModal ? (
                  <p>
                    <span className="title">Nơi làm việc</span>:{" "}
                    {profile.institution}
                  </p>
                ) : (
                  <div className="onInput">
                    <span className="title">Nơi làm việc</span>:
                      <input type="email" placeholder="Nơi làm việc" />
                  </div>
                )}
              </div>
              <div className="profile-info">
                {showDetailModal ? (
                  <p>
                    <span className="title">Các môn giảng dạy</span>:
                    <ul>
                      <li>Trí tuệ nhân tạo</li>
                      <li>Phát triển phần mềm theo tiêu chuẩn ITSS</li>
                      <li>Giao diện và trải nghiệm người dùng</li>
                    </ul>
                  </p>
                ) : (
                  <div className="onInput">
                    <span className="title">Các môn giảng dạy</span>:
                      <input type="email" placeholder="Các môn giảng dạy" />
                  </div>
                )}
              </div>
              {/* <div className="profile-info">
                <p><span className="title">Email</span>:   {profile.primaryEmail}</p>
              </div>
              <div className="profile-info">
                <p><span className="title">Email dự phòng</span>:   {profile.backupEmail}</p>
              </div> */}
              {showDetailModal ? (
                <div
                  className="change-basic-info-button"
                  onClick={toggleDetailModal}
                >
                  Thay đổi
                </div>
              ) : (
                <div className="button-group">
                  <div
                    className="change-basic-info-button"
                    onClick={() => { toggleDetailModal(); notify(); }}
                  >
                    Lưu
                  </div>
                  <div
                    className="change-basic-info-button"
                    onClick={toggleDetailModal}
                  >
                    Hủy
                  </div>
                </div>
              )}
            </div>

            <div className="basic-info">
              <h2>Thông tin liên lạc</h2>
              <div className="profile-info">
                <MdMailOutline className="info-icon" />
                {showBasicModal ? (
                  <p>Email: {profile.email}</p>
                ) : (
                  <input type="email" placeholder="Email" />
                )}
              </div>
              <div className="profile-info">
                <MdPhone className="info-icon" />
                {showBasicModal ? (
                  <p>SĐT: {profile.phone}</p>
                ) : (
                  <input type="tel" placeholder="SĐT" />
                )}
              </div>
              <div className="profile-info">
                <IoLocationOutline className="info-icon" />
                {showBasicModal ? (
                  <p>Địa chỉ: {profile.address}</p>
                ) : (
                  <input type="text" placeholder="Địa chỉ" />
                )}
              </div>
              <div className="profile-info">
                <IoGlobeOutline className="info-icon" />

                {showBasicModal ? (
                  <p>
                    Facebook: <a href={profile.facebook}>{profile.facebook}</a>
                  </p>
                ) : (
                  <input type="text" placeholder="Địa chỉ" />
                )}
              </div>
              {showBasicModal ? (
                <div
                  className="change-basic-info-button"
                  onClick={toggleBasicModal}
                >
                  Thay đổi
                </div>
              ) : (
                <div className="button-group">
                  <div
                    className="change-basic-info-button"
                    onClick={() => { toggleBasicModal(); notify(); }}
                  >
                    Lưu
                  </div>
                  <div
                    className="change-basic-info-button"
                    onClick={toggleBasicModal}
                  >
                    Hủy
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
