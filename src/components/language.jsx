import { useState } from 'react';

const LanguageSelector = () => {
  const [lang, setLang] = useState('swa');

  const imageStyle = {
    width: '16px',
    height: '11px',
    marginRight: '2px',
  };

  const textStyle = {
    fontSize: '0.825rem',
  };

  const languages = {
    swa: {
      label: 'SWA',
      flag: <img src="/download.png" alt="SWA" style={imageStyle} />,
    },
    eng: {
      label: 'ENG',
      flag: <img src="/usa.png" alt="ENG" style={imageStyle} />,
    },
  };

  return (
    <div className="dropdown">
      <button
        className="btn dropdown-toggle d-flex align-items-center language"
        type="button"
        id="languageDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={textStyle}
      >
        {languages[lang].flag}
        <span className="ms-0">{languages[lang].label}</span>
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby="languageDropdown"
        style={{ backgroundColor: 'transparent', border: 'none' }}
      >
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => setLang('swa')}
            style={{ ...textStyle, backgroundColor: 'transparent', border: 'none', color: 'black' }}
          >
            <img src="/download.png" alt="SWA" style={imageStyle} />
            SWA
          </button>
        </li>
        <li>
          <button
            className="dropdown-item d-flex align-items-center"
            onClick={() => setLang('eng')}
            style={{ ...textStyle, backgroundColor: 'transparent', border: 'none', color: 'black' }}
          >
            <img src="/usa.png" alt="ENG" style={imageStyle} />
            ENG
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
