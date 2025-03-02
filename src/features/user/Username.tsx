import { useSelector } from "react-redux";
import { StoreState } from "../../store.types";

function Username() {
  const username = useSelector<StoreState, string>((state) => state.user.username);
  if (!username) return null;

  return <div className="text-sm font-semibold">{username}</div>;
}

export default Username;
