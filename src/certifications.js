import React, { useState } from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import ViewCertification from './ViewCertification'; // Import the ViewCertification component
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component from react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles

const certificationsData = [
  { id: 1, name: 'Certification 1', image: require('./CertificationsImages/cer.jpg') },
  { id: 2, name: 'Certification 2', image: require('./CertificationsImages/cerr.jpg') },
  { id: 3, name: 'Certification 3', image: require('./CertificationsImages/cer.jpg') },
  { id: 4, name: 'Certification 4', image: require('./CertificationsImages/cerr.jpg') },
  { id: 5, name: 'Certification 5', image: require('./CertificationsImages/cer.jpg') },
  { id: 6, name: 'Certification 6', image: require('./CertificationsImages/cerr.jpg') },
];

function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleCertificationClick = (certification) => {
    setSelectedCertification(certification);
  };

  const renderCertificationItems = () => {
    return certificationsData.map((certification) => (
      <div key={certification.id} style={{ margin: '10px', backgroundColor: '#f0f0f0', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <Card>
          <CardMedia
            component="img"
            image={certification.image}
            alt={certification.name}
          />
          <CardContent style={{ padding: '20px' }}>
            <Typography variant="h5" component="h2" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
              {certification.name}
            </Typography>
            <Button variant="contained" onClick={() => handleCertificationClick(certification)} style={{ backgroundColor: '#4CAF50', color: 'white', fontWeight: 'bold', borderRadius: '5px', padding: '10px 20px' }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>
    ));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', maxHeight: '100vh', overflowY: 'auto' }}>
      <Typography variant="h2" gutterBottom style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', marginBottom: '20px'  }}>All Certifications</Typography>
      {selectedCertification ? (
        <ViewCertification certification={selectedCertification} />
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Carousel showThumbs={false} showArrows={true} dynamicHeight={true} className="w-full">
              {renderCertificationItems()}
            </Carousel>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Certifications;
