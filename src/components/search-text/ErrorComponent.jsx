import img from '../../assets/images/404.jpg'
export default function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      {/* <h1>We are working really hard!</h1>
      <div>Appologies for the 404. Reach out to our team at ABC-DEF-IJK.</div> */}
      <img src={img} alt="" style={{height: '100vh', width: '100vw', marginTop: '-6px'}}/>
    </div>
  );
}
