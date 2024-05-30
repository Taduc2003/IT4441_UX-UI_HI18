import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import './Personal.css';
import Header from '../header/Header';
import { FaPen } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Personal = () => {
  // Function to trigger file input click
  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='container'>
      <Sidebar />

      <div className='main-content'>
        <Header />
        
        <div className='top-page'>
          <div className='change-cover-button' onClick={handleFileInputClick}>
            <FaPen />
            <p>Đổi ảnh bìa</p>
          </div>
          <div className='change-avatar-button' onClick={handleFileInputClick}>
            <FaPen />
            <p>Đổi ảnh đại diện</p>
          </div>
        </div>

        <div className="info">
          {/* Hidden file input element */}
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <div className='change-info-button' onClick={toggleModal}>
            <FaPen />
            <p>Sửa thông tin</p>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Sửa thông tin</h2>
                  <span className="close" onClick={toggleModal}>&times;</span>
                </div>
                <div className="modal-body">
                  {/* Basic Info */}
                  <div className="info-section">
                    <h3>Thông tin cơ bản</h3>
                    <div className="input-field">
                      <input type="text" placeholder="Gmail" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Số điện thoại" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Địa chỉ" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Link mạng xã hội" className="rounded-input" />
                    </div>
                  </div>
                  {/* Detail Info */}
                  <div className="info-section">
                    <h3>Thông tin chi tiết</h3>
                    <div className="input-field">
                      <DatePicker selected={new Date()} placeholderText="Ngày sinh" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Chức vụ" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Nơi làm việc" className="rounded-input" />
                    </div>
                    <div className="input-field">
                      <DatePicker selected={new Date()} placeholderText="Ngày tham gia" className="rounded-input" />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={toggleModal} className="rounded-button">Lưu</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Personal;
