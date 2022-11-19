import {useTheme} from "../contexts/ThemeContext";
import {useLang} from "../contexts/LangContext";

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const {lang} = useLang();
  return (
    <div>
      <hr />
      Footer
      <div>Aktif tema : {theme}</div>
      <div>Aktif dil : {lang}</div>
      <button onClick={toggleTheme}>
        Temayı değiştir
      </button>
    </div>
  );
};

export default Footer;
