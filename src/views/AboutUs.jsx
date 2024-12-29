import '../views/AboutUs.css'; 

export default function AboutUs() {
  return (
    <section className="about-us-section text-center mt-5">
      <div className="section-content">
        <h3 className="section-subtitle">Our Mission</h3>
        <p className="section-description">
          At our organization, we strive to provide loving homes for every cat in need. Our mission is to connect compassionate individuals with furry companions, ensuring both are matched for a lifetime of happiness and care.
        </p>
      </div>

      <div className="section-content">
        <h3 className="section-subtitle">Our History</h3>
        <p className="section-description">
          Founded with the goal of rescuing and rehoming abandoned cats, we have grown into a community that cares deeply for our feline friends. Over the years, we have worked tirelessly to improve the lives of countless cats, finding them forever homes and advocating for their well-being.
        </p>
      </div>

      <div className="section-content">
        <h3 className="section-subtitle">Meet Our Team</h3>
        <div className="team-images">
          <div className="team-member">
            <p className="team-name">Aspia Amir</p>
            <p className="team-designation">Founder & CEO</p> 
          </div>
          <div className="team-member">
            <p className="team-name">James Aurth</p>
            <p className="team-designation">Operations Manager</p> 
          </div>
          <div className="team-member">
            <p className="team-name">Bob Doe</p>
            <p className="team-designation">Adoption Specialist</p> 
          </div>
        </div>
      </div>
    </section>
  );
}
