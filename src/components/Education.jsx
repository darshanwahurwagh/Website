const Education = () => {
  return (
    <section id="education" style={{ padding: '60px 0' }}>
      <div className="container">
        <h2 className="section-title mb-3">Education</h2>
        
        {/* M.Sc. Computer Science */}
        <div style={{ position: 'relative', marginLeft: '20px', borderLeft: '3px solid #6610f2', paddingLeft: '20px', marginBottom: '30px', borderRadius: '15px', padding: '20px', backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', left: '-11px', top: '20px', width: '20px', height: '20px', background: '#6610f2', borderRadius: '50%', border: '3px solid var(--bs-body-bg)', boxShadow: '0 0 0 2px #6610f2' }}></div>
          <h4 style={{ marginBottom: '5px' }}>Master of Computer Science</h4>
          <p className="text-secondary al">Savitribai Phule Pune University | 90%</p>
          <div style={{ width: '100%', background: 'var(--bs-secondary-bg)', borderRadius: '10px', height: '25px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: '#ffc107', textAlign: 'center', color: '#000000', fontSize: '14px', lineHeight: '25px' }}>
              2025 – 2027 (Completed)
            </div>
          </div>
        </div>

        {/* B.Sc. Computer Science */}
        <div style={{ position: 'relative', marginLeft: '20px', borderLeft: '3px solid #6610f2', paddingLeft: '20px', marginBottom: '30px', borderRadius: '15px', padding: '20px', backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', left: '-11px', top: '20px', width: '20px', height: '20px', background: '#6610f2', borderRadius: '50%', border: '3px solid var(--bs-body-bg)', boxShadow: '0 0 0 2px #6610f2' }}></div>
          <h4 style={{ marginBottom: '5px' }}>Bachelor of Computer Science</h4>
          <p className="text-secondary al">Sant Gadge Baba Amaravti University | 70%</p>
          <div style={{ width: '100%', background: 'var(--bs-secondary-bg)', borderRadius: '10px', height: '25px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: '#ffc107', textAlign: 'center', color: '#000', fontSize: '14px', lineHeight: '25px' }}>
              2021 – 2024 (Completed)
            </div>
          </div>
        </div>
      
        {/* HSC */}
        <div style={{ position: 'relative', marginLeft: '20px', borderLeft: '3px solid #6610f2', paddingLeft: '20px', marginBottom: '30px', borderRadius: '15px', padding: '20px', backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', left: '-11px', top: '20px', width: '20px', height: '20px', background: '#6610f2', borderRadius: '50%', border: '3px solid var(--bs-body-bg)', boxShadow: '0 0 0 2px #6610f2' }}></div>
          <h4 style={{ marginBottom: '5px' }}>HSC</h4>
          <p className="text-secondary al">Sant Gadge Baba Amaravti University | 80.50%</p>
          <div style={{ width: '100%', background: 'var(--bs-secondary-bg)', borderRadius: '10px', height: '25px', overflow: 'hidden' }}>
            <div style={{ width: '100%', height: '100%', background: '#ffc107', textAlign: 'center', color: '#000', fontSize: '14px', lineHeight: '25px' }}>
             2019 – 2021 (Completed)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
