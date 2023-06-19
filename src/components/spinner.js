import './css.css'

const Spinner = () => {
  return (
    <>
      <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" style={{width: '3rem', height: '3rem'}} />
      </div>
    </>
  );
}

export default Spinner;
