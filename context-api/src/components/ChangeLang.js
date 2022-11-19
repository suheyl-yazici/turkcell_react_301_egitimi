import {useLang} from "../contexts/LangContext";

const ChangeLang = () => {
  const {lang, setLang } = useLang();

  return (
    <div>
      <div>
        <hr />
        Aktif Dil: {lang}
      </div>
      <button onClick={() => setLang("tr")}>Tr</button>
      <button onClick={() => setLang("en")}>En</button>
      <button onClick={() => setLang("de")}>De</button>
    </div>
  );
};

export default ChangeLang;
