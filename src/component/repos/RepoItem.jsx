import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-violet-800 hover:bg-violet-500">
      <Link to={html_url} className="card-body">
        <h3 className="mb-2 text-xl font-semibold text-white">
          <a href={html_url}>
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3 text-white">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg rounded">
            <FaEye className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg rounded">
            <FaStar className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg rounded">
            <FaInfo className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg rounded">
            <FaUtensils className="mr-2" /> {forks}
          </div>
        </div>
      </Link>
    </div>
  );
}

RepoItem.propTypes = {
  repo: propTypes.object.isRequired,
};

export default RepoItem;
