
import { useRef, useState } from "react";
import {
  HeartPulse,
  Search,
  Upload,
  Pill,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Menu,
  X,
  FileText,
  Stethoscope,
} from "lucide-react";
import "./App.css";

function Home({ onLogin }) {
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileInput = useRef(null);

  const medicines = [
    {
      name: "Paracetamol",
      type: "Pain Relief",
      description: "Used for fever and mild to moderate pain.",
      price: "₹20",
      tag: "Popular",
    },
    {
      name: "Cetirizine",
      type: "Allergy Relief",
      description: "Helps relieve sneezing and allergy symptoms.",
      price: "₹35",
      tag: "Common",
    },
    {
      name: "Vitamin C",
      type: "Supplement",
      description: "Supports normal immune system function.",
      price: "₹55",
      tag: "Wellness",
    },
  ];

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleFile(event) {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <HeartPulse size={25} />
          </span>
          <span>
            Medi<span className="brand-highlight">Match</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

        <nav className={mobileMenu ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMobileMenu(false)}>
            Home
          </a>
          <a href="#medicines" onClick={() => setMobileMenu(false)}>
            Medicines
          </a>
          <a href="#upload" onClick={() => setMobileMenu(false)}>
            Upload Prescription
          </a>
          <a href="#about" onClick={() => setMobileMenu(false)}>
            About
          </a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn" onClick={onLogin}>
            Log in
          </button>
          <button className="signup-btn" onClick={onLogin}>
            Sign up
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <ShieldCheck size={16} />
              YOUR HEALTH, OUR PRIORITY
            </div>

            <h1>
              Find the right medicine.
              <span> At the right price.</span>
            </h1>

            <p className="hero-description">
              Compare medicine prices, explore trusted information and find
              nearby pharmacies — all in one place.
            </p>

            <div className="search-box">
              <Search size={21} />

              <input
                type="text"
                placeholder="Search medicines..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button
                onClick={() =>
                  document
                    .getElementById("medicines")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Search
              </button>
            </div>

            <div className="hero-points">
              <span>
                <ShieldCheck size={17} />
                Trusted information
              </span>
              <span>
                <Clock size={17} />
                Save your time
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle">
              <div className="medical-cross">+</div>

              <div className="floating-card card-one">
                <Pill size={23} />
                <div>
                  <strong>Medicine search</strong>
                  <small>Easy and quick</small>
                </div>
              </div>

              <div className="floating-card card-two">
                <ShieldCheck size={24} />
                <div>
                  <strong>Smart comparison</strong>
                  <small>Compare prices</small>
                </div>
              </div>

              <div className="hero-pill">
                <Pill size={75} />
              </div>

              <div className="visual-plus plus-one">+</div>
              <div className="visual-plus plus-two">+</div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features" id="about">
          <div className="feature">
            <span><Search /></span>
            <div>
              <h3>Search Medicines</h3>
              <p>Find medicines easily</p>
            </div>
          </div>

          <div className="feature">
            <span><Upload /></span>
            <div>
              <h3>Upload Prescription</h3>
              <p>Upload your prescription</p>
            </div>
          </div>

          <div className="feature">
            <span><MapPin /></span>
            <div>
              <h3>Nearby Pharmacies</h3>
              <p>Discover local stores</p>
            </div>
          </div>

          <div className="feature">
            <span><ShieldCheck /></span>
            <div>
              <h3>Compare Prices</h3>
              <p>Explore available offers</p>
            </div>
          </div>
        </section>

        {/* UPLOAD PRESCRIPTION */}
        <section className="upload-section" id="upload">
          <div className="upload-info">
            <div className="section-label">
              SIMPLE & CONVENIENT
            </div>

            <h2>
              Your prescription, <span>made easier.</span>
            </h2>

            <p>
              Upload a clear photo or PDF of your prescription.
              MediMatch can help you organize prescribed medicines
              and explore available price information.
            </p>

            <ul>
              <li>
                <ShieldCheck size={18} />
                Secure upload experience
              </li>
              <li>
                <FileText size={18} />
                Supports images and PDF files
              </li>
              <li>
                <Pill size={18} />
                Explore prescribed medicines
              </li>
            </ul>
          </div>

          <div className="upload-card">
            <div className="upload-icon">
              <Upload size={30} />
            </div>

            <h3>Upload your prescription</h3>
            <p>Choose a JPG, PNG or PDF file</p>

            <input
              ref={fileInput}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              hidden
              onChange={handleFile}
            />

            <button
              className="upload-btn"
              onClick={() => fileInput.current?.click()}
            >
              <Upload size={18} />
              Choose file
            </button>

            {fileName && (
              <p className="file-name">{fileName}</p>
            )}

            <small>
              Your prescription is not sent anywhere in this demo.
            </small>
          </div>
        </section>

        {/* MEDICINES */}
        <section className="medicine-section" id="medicines">
          <div className="section-heading">
            <div>
              <div className="section-label">EXPLORE</div>
              <h2>Discover medicines</h2>
              <p>Explore some commonly searched medicines.</p>
            </div>

            <a href="#medicines">
              Explore all <ArrowRight size={17} />
            </a>
          </div>

          <div className="medicine-grid">
            {filteredMedicines.length > 0 ? (
              filteredMedicines.map((medicine) => (
                <article
                  className="medicine-card"
                  key={medicine.name}
                >
                  <div className="medicine-top">
                    <span className="medicine-icon">
                      <Pill size={27} />
                    </span>

                    <span className="medicine-tag">
                      {medicine.tag}
                    </span>
                  </div>

                  <h3>{medicine.name}</h3>

                  <span className="medicine-type">
                    {medicine.type}
                  </span>

                  <p>{medicine.description}</p>

                  <div className="medicine-bottom">
                    <strong>{medicine.price}</strong>

                    <button
                      aria-label={`View ${medicine.name}`}
                    >
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p>No demo medicines found. Try another search.</p>
            )}
          </div>

          <p className="demo-note">
            Demo content only. Prices are illustrative, not live pharmacy offers.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-icon">
            <Stethoscope size={30} />
          </div>

          <h2>Healthcare choices, made simpler.</h2>

          <p>
            Start exploring medicines and make more informed decisions.
          </p>

          <a href="#medicines">
            Explore medicines <ArrowRight size={17} />
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <a href="#home" className="brand">
          <span className="brand-icon">
            <HeartPulse size={22} />
          </span>

          <span>
            Medi<span className="brand-highlight">Match</span>
          </span>
        </a>

        <p>© 2026 MediMatch. Your health, our priority.</p>
      </footer>
    </div>
  );
}

export default Home;
