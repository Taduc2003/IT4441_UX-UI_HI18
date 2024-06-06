import React, { useState } from 'react';
import './UploadFileOrImg.css';
import { toast } from "react-toastify";

const FileUpload = ({onClose}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Thông tin tệp đã chọn:', selectedFile);
      toast.success('Đã tải lên thành công');
      // Thêm logic xử lý file tải lên ở đây (ví dụ: gửi đến API, lưu vào state, ...)
      setSelectedFile(null); // Đặt lại trạng thái tệp đã chọn sau khi tải lên
      setPreview(null); // Xóa URL xem trước sau khi tải lên
      onClose();
    }else{
      toast.error('Không thể tải tệp lên');
    }
  };

  return (
    <div className="upload-container show">
      <div className="upload-label">Tải minh chứng</div>
        <div className="file-upload-content">
          <input type="file" onChange={handleFileChange} />
          {preview && <img src={preview} alt="Preview" className="preview-image"/>}
          {selectedFile && <button className='upload-button' onClick={handleUpload}>Tải lên</button>}
      </div>
      <button className='close-button' onClick={onClose}>Thoát</button>
    </div>
  );
};

export default FileUpload;