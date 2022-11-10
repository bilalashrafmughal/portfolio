import { Light } from "./light";
import { Dark } from "./dark";
import { useDispatch } from "react-redux";
import { lightTheme, darkTheme } from "shared/store/modeSlice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const mode = window.localStorage.getItem("mode");
  let theme = Light;
  if (mode === "light") {
    dispatch(lightTheme());
    theme = Light;
    return theme;
  }
  dispatch(darkTheme());
  theme = Dark;
  return theme;
};
