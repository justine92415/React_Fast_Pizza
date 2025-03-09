import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {error && typeof error === "object" && "data" in error
          ? String(error.data)
          : "Unknown error"}
      </p>

      <LinkButton to="-1">Go to home</LinkButton>
    </div>
  );
}

export default NotFound;
