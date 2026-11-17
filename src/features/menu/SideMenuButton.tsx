// Видимый вход в меню: поиск и профиль появятся внутри него.
// Пока меню не открывается, кнопка только занимает место в интерфейсе.
export function SideMenuButton() {
  return (
    <button type="button" className="menu-button" aria-label="Открыть меню">
      <span className="menu-button__bar" />
    </button>
  );
}
