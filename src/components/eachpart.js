

const Eachpart = ({pageName}) => {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4  slideInDown">{pageName}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item text-primary" aria-current="page">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Eachpart;
