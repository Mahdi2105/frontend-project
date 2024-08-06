import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return (
    <div className="loading">
      <FontAwesomeIcon icon={faSpinner} spinPulse size="2xl" />
    </div>
  );
}

export default Loading;
