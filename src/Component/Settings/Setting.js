import React, { useState, useEffect } from 'react';
import './Setting.css';
import Sidebar from '../Sidebar';

const languageTexts = {
  vi: {
    theme: 'Chọn theme phù hợp với bạn',
    light: 'Sáng',
    dark: 'Tối',
    date: 'Ngày và giờ',
    dateFormat1: 'DD/MM/YYYY',
    dateFormat2: 'YYYY/MM/DD',
    timeFormat: 'Chọn định dạng giờ:',
    timeFormat1: '24 giờ (vd 14h)',
    timeFormat2: '12 giờ (vd 2PM)',
    numberFormat: 'Định dạng số',
    numberFormat1: 'Làm tròn kết quả: Đến phần nguyên',
    numberFormat2: 'Đến 1 chữ số thập phân',
    language: 'Chọn ngôn ngữ hiển thị:',
    vietnamese: 'Tiếng Việt',
    english: 'Tiếng Anh',
    japanese: 'Tiếng Nhật',
    defaultLanguage: 'Đặt làm ngôn ngữ mặc định',
    notifications: 'Thông báo',
    emailNotifications: 'Gửi mọi thông báo tới email',
    kpiEmail: 'Gửi tiến độ KPI đến email hàng ngày',
    weeklyReport: 'Gửi báo cáo hàng tuần đến email',
    disableApp: 'Tắt thông báo ứng dụng'
  },
  en: {
    theme: 'Choose a theme that suits you',
    light: 'Light',
    dark: 'Dark',
    date: 'Date and Time',
    dateFormat1: 'DD/MM/YYYY',
    dateFormat2: 'YYYY/MM/DD',
    timeFormat: 'Choose a time format:',
    timeFormat1: '24-hour (e.g., 14h)',
    timeFormat2: '12-hour (e.g., 2PM)',
    numberFormat: 'Number Format',
    numberFormat1: 'Round results: Integer only',
    numberFormat2: 'To 1 decimal place',
    language: 'Choose display language:',
    vietnamese: 'Vietnamese',
    english: 'English',
    japanese: 'Japanese',
    defaultLanguage: 'Set as default language',
    notifications: 'Notifications',
    emailNotifications: 'Send all notifications to email',
    kpiEmail: 'Send KPI progress to email daily',
    weeklyReport: 'Send weekly report to email',
    disableApp: 'Disable app notifications'
  },
  jp: {
    theme: 'あなたに合ったテーマを選択してください',
    light: 'ライト',
    dark: 'ダーク',
    date: '日付と時間',
    dateFormat1: 'DD/MM/YYYY',
    dateFormat2: 'YYYY/MM/DD',
    timeFormat: '時間形式を選択してください:',
    timeFormat1: '24時間（例：14時）',
    timeFormat2: '12時間（例：午後2時）',
    numberFormat: '数字の形式',
    numberFormat1: '結果を丸める：整数のみ',
    numberFormat2: '小数点以下1桁まで',
    language: '表示言語を選択してください：',
    vietnamese: 'ベトナム語',
    english: '英語',
    japanese: '日本語',
    defaultLanguage: 'デフォルト言語として設定',
    notifications: '通知',
    emailNotifications: 'すべての通知をメールで送信',
    kpiEmail: '毎日KPI進捗をメールで送信',
    weeklyReport: '毎週のレポートをメールで送信',
    disableApp: 'アプリ通知を無効にする'
  }
};

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('vi');
  const [texts, setTexts] = useState({});

  useEffect(() => {
    setTexts(languageTexts[language]);
    document.documentElement.classList.toggle('dark-theme', theme === 'dark');
    document.documentElement.lang = language;
  }, [theme, language]);

  return (
    <div className="settings-container">
      <Sidebar />
      <div className="settings-content">
        <div className="section">
          <h2>{texts.theme}</h2>
          <div className="content">
            <p>{texts.theme}</p>
            <div className="theme-options">
              <div
                className={`theme-option ${theme === 'light' ? 'selected' : ''}`}
                onClick={() => setTheme('light')}
              >
                {texts.light}
              </div>
              <div
                className={`theme-option ${theme === 'dark' ? 'selected' : ''}`}
                onClick={() => setTheme('dark')}
              >
                {texts.dark}
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>{texts.date}</h2>
          <div className="content">
            <div className="row">
              <p>{texts.date}</p>
              <label><input type="radio" name="date-format" defaultChecked /> {texts.dateFormat1}</label>
              <label><input type="radio" name="date-format" /> {texts.dateFormat2}</label>
            </div>
            <div className="row">
              <p>{texts.timeFormat}</p>
              <label><input type="radio" name="time-format" defaultChecked /> {texts.timeFormat1}</label>
              <label><input type="radio" name="time-format" /> {texts.timeFormat2}</label>
            </div>
            <div className="row">
              <p>{texts.numberFormat}</p>
              <label><input type="radio" name="number-format" defaultChecked /> {texts.numberFormat1}</label>
              <label><input type="radio" name="number-format" /> {texts.numberFormat2}</label>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>{texts.language}</h2>
          <div className="content">
            <p>{texts.language}</p>
            <label>
              <input
                type="radio"
                name="language"
                value="vi"
                checked={language === 'vi'}
                onChange={() => setLanguage('vi')}
              /> {texts.vietnamese}
            </label>
            <label>
              <input
                type="radio"
                name="language"
                value="en"
                checked={language === 'en'}
                onChange={() => setLanguage('en')}
              /> {texts.english}
            </label>
            <label>
              <input
                type="radio"
                name="language"
                value="jp"
                checked={language === 'jp'}
                onChange={() => setLanguage('jp')}
              /> {texts.japanese}
            </label>
            <br /><br />
            <label className="toggle-switch">
              <input type="checkbox" name="default-language" />
              <span className="slider"></span>
            </label>
            <span>{texts.defaultLanguage}</span>
          </div>
        </div>
        <div className="section">
          <h2>{texts.notifications}</h2>
          <div className="content">
            <label className="toggle-switch">
              <input type="checkbox" name="email-notifications" />
              <span className="slider"></span>
            </label>
            <span>{texts.emailNotifications}</span>
            <br /><br />
            <label className="toggle-switch">
              <input type="checkbox" name="kpi-email-daily" />
              <span className="slider"></span>
            </label>
            <span>{texts.kpiEmail}</span>
            <br /><br />
            <label className="toggle-switch">
              <input type="checkbox" name="weekly-report-email" />
              <span className="slider"></span>
            </label>
            <span>{texts.weeklyReport}</span>
            <br /><br />
            <label className="toggle-switch">
              <input type="checkbox" name="disable-app-notifications" />
              <span className="slider"></span>
            </label>
            <span>{texts.disableApp}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
