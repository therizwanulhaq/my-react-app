import Button from "../components/Button";
import CountButton from "../components/CountButton";

function AboutUs() {
  return (
    <div>
      {/* <h2>About Us</h2> */}
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
      <Button>button w children</Button>
    </div>
  );
}
export default AboutUs;
