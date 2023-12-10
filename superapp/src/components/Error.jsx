/* eslint-disable react/prop-types */
const Error = ({ loading, error, children }) => (
  <div>
    {loading && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {!loading && !error && children}
  </div>
);

export default Error;
