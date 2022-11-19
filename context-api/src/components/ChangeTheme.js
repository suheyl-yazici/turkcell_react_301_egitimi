import { useTheme } from "../contexts/ThemeContext";

const ChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <div>Aktif Tema : {theme}</div>
      <button onClick={toggleTheme}>
        Temayı değiştir
      </button>
    </div>
  );
};

export default ChangeTheme;
